<?php
/**
 * This is a simple callback ajax example for the javascript tree.  This mimicks
 * the example found here:
 * http://tafel.developpez.com/site/lang/en/samples.php#ddajax1
 *
 *
 * @package
 * @author      Joshua Ross <joshualross@gmail.com>
 * @copyright   Copyright (C) () All rights reserved.
 * @version     $Id:  $
 * @revision    $LastChangedRevision:  $
 * @date        $LastChangedDate:  $
 * @file        $HeadURL:  $
 * @link        http://www..com
 * @since       File available since release
 */

set_include_path('..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR
    . 'software' . PATH_SEPARATOR . get_include_path());

require_once 'Zend/Filter/Input.php';
require_once 'Zend/Validate/Between.php';
require_once 'Zend/Json.php';

/*
 * Initialize drop and message
 */
$drop = false;
$msg = 'Unknown Error';

/*
 * There are several callback options that are passed from the tafel tree.
 * Here is a list:
 *
 * drag = JSON descript of dragged branch
 * drop = JSON description of dropped-on branch
 * drag_id = dragged branch id
 * drop_id = drop branch id
 * treedrag_id = dragged branch's tree id
 * treedrop_id = drop branch's tree id
 * sibling = false if dropped as a child, true if dropped as a sibling
 *
 */
if (isset($_POST['drop'])) {

    // All tree vars are in POST. Nothing in GET, here


    /*
     * Validate necessary inputs in processing a drop
     */
    $validators = array(
        'sibling' => new Zend_Validate_Between(0, 1)
    );


    $input = new Zend_Filter_Input(array(), $validators, $_POST);

    if (!$input->isValid()) {
        $drop = false;
        $msg = 'Invalid input parameters';
    }

    /*
     * Cannot drop as siblings (same level)
     */
    if ($input->sibling) {
        $drop = false;
        $msg = 'Cannot drop item as sibling';
    } else {
        $drop = true;
        $msg = 'Successfully dropped item';
    }


}

/*
 * Encode a response and echo to the caller
 */
$return = array(
    'ok' => $drop,
    'msg' => $msg
);
echo '(' . Zend_Json::encode($return) . ')';

