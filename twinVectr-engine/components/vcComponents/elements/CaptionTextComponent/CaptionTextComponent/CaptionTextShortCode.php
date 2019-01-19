<?php
namespace CaptionTextComponent\CaptionTextComponent;

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Modules\Elements\Traits\AddShortcodeTrait;

class CaptionTextShortCode extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;
    use AddShortcodeTrait;

    public function __construct()
    {
        if (!defined('VC_CAPTION_TEXT_SHORTCODE')) {
            $this->addEvent('vcv:inited', 'registerShortcode');
            $this->addFilter('vcv:editor:variables vcv:editor:variables/CaptionTextComponent', 'getVariables');
            define('VC_CAPTION_TEXT_SHORTCODE', true);
        }
    }

    protected function registerShortcode()
    {
        $this->addShortcode('vcv_caption_text', 'renderCaptionText');
    }

    protected function getVariables($variables)
    {
        $value = $this->getPostLogo();
        $variables[] = [
            'key' => 'vcvLogo',
            'value' => $value,
            'type' => 'variable',
        ];

        return $variables;
    }

    private function getPostLogo()
    {
        return 'test';
    }

    protected function renderCaptionText($atts, $content, $tag)
    {
        return "<div class='test' js-react-module='textCaption' data-react-props='" . urldecode($atts["data"]) . "'></div>";
    }

}
