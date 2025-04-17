/*********
Author: Adalberto Ap. Silva
Prototype Event Dispatcher
Methods: addEventListener, removeEventListener, dispatchEvent, toString
*********/
export class Event {

  public static events: any = {};

  /**
	* Add event
	**/
  public static addEventListener (key, func) {
    if ( ! this.events.hasOwnProperty( key ) ) {
      this.events[key] = [];
    }
    this.events[key].push(func);
  }

  /**
  * removeEventListener
  **/
  public static removeEventListener (key, func) {
    if (this.events.hasOwnProperty(key)) {
      for (const i in this.events[key]) {
        if (this.events[key][i] === func) {
          this.events[key].splice(i, 1);
        }
      }
    }
  }

  /**
  * dispatchEvent
  **/
  public static dispatchEvent (key, dataObj = {} ) {
    if (this.events.hasOwnProperty(key)) {
      for (const i in this.events[key]) {
        if (  this.events[key].hasOwnProperty(i) ) {
          this.events[key][i](dataObj);
        }
      }
    }
  }

  /**
  * toString
  **/
  public static toString () {
    return '[EventDispatcher]';
  }

}
