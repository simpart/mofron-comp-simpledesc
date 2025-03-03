/**
 * @file mofron-comp-getstarted/index.js
 * @brief get-start component
 * @license MIT
 */
const ConfArg   = mofron.class.ConfArg;
const Component = mofron.class.Component;
const Text      = require("mofron-comp-text");

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("SimpleDesc");
	    this.shortForm("title","desc");
            
	    /* init config */
            this.confmng().add("weight", { type:"number", init:700 });

	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            // text setting
            this.title().config({
                size:   "0.4rem",
                weight: this.weight(),
                style:  { "text-align":"center" }
            });
            this.desc().config({
                size:   "0.25rem",
                style:  { "text-align":"center" }
            });

	    this.child([this.title(), this.desc()]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    title (prm, wei) {
        try {
            if ('string' === typeof prm) {
                this.title().text(prm);
                this.weight(wei);
                return;
            }
            return this.innerComp('title',prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    weight (prm) {
        try {
            return this.confmng("weight", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    desc (prm) {
        try {
            if ('string' === typeof prm) {
                this.desc().text(prm);
                return;
            }
            return this.innerComp('desc',prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
