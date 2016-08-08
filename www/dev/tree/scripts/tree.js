/**
 * An edit panel
 *
 * This tree requires Prototype javascript framework, scriptaculous effects
 * library, and tafeltree
 *
 * To use the tree, create an instance using prototype's Event.observe for
 * window.load.  Pass an array of options to the created tree:
 * var config = {id:tree1,callback:{enabled:true,url:http://localhost/tree/callback.php},};
 * Event.observe(window, 'load', function(){myTree = new Tree(config);}, false);
 *
 *
 *
 * By default this script creates an instance of the panel called myPanel( you
 * can see this at the bottom of this script).  So to work with or use the panel
 * you can simply use myPanel, which is a global instance of the panel.
 *
 * The panel has configuration that at this time can be set and passed at the
 * bottom of this file.  The following options are available
 *
 * height - integer - default null
 *    height of the panel, can be controlled through css as well by defining a
 *    height for #panel
 * width - integer - default null
 *    width of the panel, can be controlled through css as well by defining a
 *    width for #panel
 *
 * overlay - options for the overlay backdrop behind the panel
 * overlay.clickexit - boolean - default true
 *    defines whether the backdrop exits the panel when clicked
 * overlay.duration - integer - default 1
 *    defines the duration in seconds of the overlay open or close effect
 * overlay.from - float - default 0.0
 *    defines the start opacity for the overlay effect
 * overlay.to - float - default 0.8
 *    defines the end opacity for the overlay effect
 *
 * open - options for the open of the panel
 * open.effect - string - default 'Appear'
 *    defines the scriptaculous effect to use to open the panel
 * open.options - JS object
 *    defines the options to pass to the scriptaculous effect
 * open.options.duration - integer - default 1
 *    defines the duration of the scriptaculous effect
 *
 * close - options for the close of the panel
 * close.effect - string - default 'Fade'
 *    defines the scriptaculous effect to use to close the panel
 * close.options - JS object
 *    defines the options to pass to the scriptaculous effect
 * close.options.duration - integer - default 1
 *    defines the duration of the scriptaculous effect
 *
 *
 * @category
 * @package
 * @author      Joshua Ross <joshualross@gmail.com>
 * @copyright   Copyright (C) ???? All rights reserved.
 * @version     $Id: $
 * @revision    $LastChangedRevision: $
 * @date        $LastChangedDate: $
 * @file        $HeadURL: $
 * @link
 * @since       File available since release 0.1
 */

//this is temporary, we need to check both that scriptaculous is available
//as well as prototype
if (typeof Prototype=='undefined')
  throw("panel.js requires the Prototype JavaScript framework >= 1.6.0");
if (typeof Effect=='undefined')
  throw("panel.js requires script.aculo.us' effects.js library");

/**
 * An edit Panel
 *
 * @author      Joshua Ross <joshualross@gmail.com>
 * @package
 * @subpackage
 * @copyright   Copyright (C) ???? All rights reserved.
 */
var Tree = Class.create();
Tree.prototype = {

    DefaultOptions: {
        id: null,
        array: null,
        generate: true,
        images: {
            location: 'images/',
            standard: 'page.gif',
            open: 'folderopen.gif',
            close: 'folder.gif'
        },
        callbackEnable: false,
        callbackUrl: null,
        callbackFunction: null
    },

    /**
     *
     * @var Object
     * @access private
     */
    _options: {},

    /**
     * This method is a private static initializer(constructor).
     *
     * The method uses tafeltree and sets up the trees.  This method is like a
     * wrapper method
     *
     * @todo accept configuration/parameters
     * @access private
     * @return void
     */
    initialize: function(options) {

        this._options = Object.extend(Object.extend({ },this.DefaultOptions), options || { });

        if (this._options.callbackEnable) {
            this.createCallbackTree();
        } else {
            this.createTree();
        }


    },

    /**
     *
     *
     *
     */
    createTree: function() {
        //TODO validate callback parameters
        this._tree = new TafelTree(this._options.id, this._options.array, {
            'generate': this._options.generate,
            'imgBase': this._options.images.location,
            'defaultImg': this._options.images.standard,
            'defaultImgOpen': this._options.images.open,
            'defaultImgClose': this._options.images.close,
            'onDrop': this.onDropEvent
        });

    },

    /**
     *
     *
     *
     */
    createCallbackTree: function() {
        //TODO validate parameters
        if (null == this._options.callbackFunction) {
            this._options.callbackFunction = this.onDropEventAjax;
        }

        this._tree = new TafelTree(this._options.id, this._options.array, {
            'generate': this._options.generate,
            'imgBase': this._options.images.location,
            'defaultImg': this._options.images.standard,
            'defaultImgOpen': this._options.images.open,
            'defaultImgClose': this._options.images.close,
            'onDropAjax': [this._options.callbackFunction, this._options.callbackUrl]
        });

    },

    /**
     *
     *
     *
     */
    onDropEvent: function(move, drop, finished) {
        if (!finished) {
            if (confirm('Are you sure you wish to move this item?')) {
                return true;
            } else {
                return false;
            }
        } else {
            alert('Move complete');
        }

    },


    /**
     * Basic AJAX method for on drop event
     *
     * This method is called from the tafel tree on drop if callback.enabled is
     * true and no callback function is provided
     *
     * @return boolean
     */
    onDropEventAjax: function(move, drop, response, finished) {
        if (!finished) {

            var obj = eval(response);
            if (!obj.ok) {
                alert ('Problem: ' + obj.msg);
                return false;
            }
        }
        return true;
    }
};
