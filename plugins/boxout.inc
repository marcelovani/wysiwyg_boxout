<?php

/**
 * @file
 *
 * Implement Wysiwyg module hooks.
 */

/**
 * Implementation of hook_wysiwyg_plugin().
 */
function wysiwyg_boxout_boxout_plugin() {
  $plugins['boxout'] = array(
    'title' => t('Boxout'),
    'vendor url' => 'http://drupal.org/project/wysiwyg_boxout',
    'icon title' => t('Adds Boxout to content'),
    'css path' => drupal_get_path('module', 'wysiwyg_boxout'),
    'css file' => 'wysiwyg_boxout.css',
    'settings'   => array(
        'form_markup' => drupal_render(drupal_get_form('wysiwyg_boxout_form')),
        'header_markup' => array(
            'prefix' => '<div class="boxout"><span><strong>',
            'suffix' => '</strong></span>',
        ),
        'body_markup' => array(
            'prefix' => '<br /><br />',
            'suffix' => '</div>',
        ),
    ),
  );
  return $plugins;
}
