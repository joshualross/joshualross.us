/**
 * A directory tree
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


var struct = [
    {
        'id': 'images',
        'txt': 'images',
        'items': [
        {
            'id': 'bg.gif',
            'txt': 'bg.gif'
        }
    ]
    },
    {
        'id': 'index.html',
        'txt': 'index.html'
    },
    {
        'id': 'scripts',
        'txt': 'scripts',
        'items': [
        {
            'id': 'builder.js',
            'txt': 'builder.js'
        },
        {
            'id': 'controls.js',
            'txt': 'controls.js'
        },
        {
            'id': 'corners.js',
            'txt': 'corners.js'
        },
        {
            'id': 'dragdrop.js',
            'txt': 'dragdrop.js'
        },
        {
            'id': 'effects.js',
            'txt': 'effects.js'
        },
        {
            'id': 'panel.js',
            'txt': 'panel.js'
        },
        {
            'id': 'prototype.js',
            'txt': 'prototype.js'
        },
        {
            'id': 'scriptaculous.js',
            'txt': 'scriptaculous.js'
        },
        {
            'id': 'slider.js',
            'txt': 'slider.js'
        },
        {
            'id': 'sound.js',
            'txt': 'sound.js'
        },
        {
            'id': 'unittest.js',
            'txt': 'unittest.js'
        }
    ]
    },
    {
        'id': 'styles',
        'txt': 'styles',
        'items': [
        {
            'id': 'default.css',
            'txt': 'default.css'
        }
    ]
    }
];
debugger;
var tree2 = null;
function TafelTreeInit () {
    tree2 = new TafelTree('test2', struct, {
        'generate':true
    });

}