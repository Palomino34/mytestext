#include "pxt.h"

namespace mytextext {
    /**
     * Set led .
     * @param on true : on, false: off
     */
     //% 
     
    void __mytextext(bool on) {
        auto rp = lookupPin(PA_8);     
        rp->setDigitalValue(on ? 1 : 0);
    }
}
