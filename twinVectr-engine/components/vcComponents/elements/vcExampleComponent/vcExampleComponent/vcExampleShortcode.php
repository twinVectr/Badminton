<?php
namespace vcExampleComponent;

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Modules\Elements\Traits\AddShortcodeTrait;

class VCExampleShortcode extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;
    use AddShortcodeTrait;

    public function __construct()
    {
        if (!defined('VC_EXAMPLE_SHORTCODE')) {
            $this->addEvent('vcv:inited', 'registerShortcode');
            $this->addFilter('vcv:editor:variables vcv:editor:variables/vcExampleComponent', 'getVariables');
            define('VC_EXAMPLE_SHORTCODE', true);
        }
    }

    protected function registerShortcode()
    {
        $this->addShortcode('vcv_test', 'renderLogo');
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

    protected function renderLogo($atts, $content, $tag)
    {
        return '<div class="test" js-react-module="test" ></div>';
    }

}
