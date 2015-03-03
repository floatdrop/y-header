/** @jsx React.DOM */
'use strict';

var React = require('react');
var YHeader = require('./index.jsx!');

React.render((
    <div>
        <div style={{padding: '10px'}}>
            <YHeader fixed>
                y-header fixed
            </YHeader>
        </div>

        <p>Lorem ipsum dolor sit amet, eu aperiri malorum vim, sit in vocibus expetenda ullamcorper. Propriae erroribus sententiae et per. Te tantas senserit facilisis est. Eu vel graece altera constituto. Habemus voluptaria pri ex.</p>

        <p>Ei quem omittantur efficiantur sed, id sententiae definiebas contentiones qui, nam ea noster admodum accusata. An vix homero alterum. Sonet errem viris eu vel, in ius possit assentior, cu per vide voluptua platonem. Alterum molestie pro eu. Cu eam recusabo consulatu consequat, graeco incorrupte an qui.</p>

        <p>Sed id putent aperiri. Duo graeci aeterno suscipit te, an primis antiopam euripidis sed. Accumsan vituperata ei quo, natum dicunt detracto cu his, clita postulant dissentias mea cu. Vix ex duis simul.</p>

        <p>Zril nostrud denique ius id, rebum viris no per. Ex usu mutat pertinacia, natum audire duo ei. In cum quodsi inciderint, bonorum erroribus cum at. In tale omnium posidonium has.</p>

        <p>Odio atomorum ne duo, cu est case option, mea et tation contentiones. Sea ludus epicurei at, debet argumentum ne mea. Vel ex melius aliquip omnesque. Sed fugit nominavi salutatus et, an pro movet primis.</p>

        <br/>
        <div>
            <YHeader>
                y-header default
            </YHeader>
        </div>
        <br/>
        <div>
            <YHeader border="white">
                y-header white border
            </YHeader>
        </div>
        <br/>
        <div>
            <YHeader border="transparent">
                y-header transparent border
            </YHeader>
        </div>
    </div>
), document.getElementById('content'));
