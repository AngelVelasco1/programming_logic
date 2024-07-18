enum daysOfWeek {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}

const showDay = (day: daysOfWeek) => {
    if (Object.values(daysOfWeek).includes(day)) {
        return daysOfWeek[day]
    }
    return "Ivalid Number"
}

showDay(1)

/*  DIFICULTAD EXTRA:
 * - Crea un pequeño sistema de gestión del estado de pedidos.
 * - Implementa una clase que defina un pedido con las siguientes características:
 * - El pedido tiene un identificador y un estado.
 * - El estado es un Enum con estos valores: PENDIENTE, ENVIADO, ENTREGADO y CANCELADO.
 * - Implementa las funciones que sirvan para modificar el estado:
 *   - Pedido enviado
 *   - Pedido cancelado
 *   - Pedido entregado
 *   (Establece una lógica, por ejemplo, no se puede entregar si no se ha enviado, etc...)
 * - Implementa una función para mostrar un texto descriptivo según el estado actual.
 * - Crea diferentes pedidos y muestra cómo se interactúa con ellos. 
*/

enum DeliveryState {
    Pending,
    Sent,
    Cancelled,
    Delivered
}

class Order {
    constructor(private _id: number, private _state: DeliveryState = DeliveryState.Pending) { }

    set id(id: number) {
        this._id = id
    }

    get id(): number {
        return this._id
    }

    set state(state: DeliveryState) {
        this._state = state
    }

    get state(): number {
        return this._state
    }

    public sendOrder() {
        if(this._state === DeliveryState.Pending) {
             this._state = DeliveryState.Sent
             return
        }
        throw new Error("Can't sent the order if state isn't pending")
    }

    public cancelOrder() {
        if (this._state === DeliveryState.Pending || this._state !== DeliveryState.Delivered) {
            this._state = DeliveryState.Cancelled
            return
        }
        throw new Error("Can't cancel the order if state isn't pending")
    }

    public deliveredOrder() {
        if (this._state === DeliveryState.Sent) {
            this._state = DeliveryState.Delivered
            return
        }
        throw new Error("To set the order as delivered, the order must be send before")
    }

    public showState() {
        console.log(`The order number ${this._id} is ${DeliveryState[this._state]}`);
        
    }
}

const order1 = new Order(1)
order1.showState()