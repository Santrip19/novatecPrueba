'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">marketplace documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-a605398d36968d8f8d2e38b87813176fb7e3dc48c328b65b8922896f02f1c81660ca53dfcb531a8a20110396c30ca7c5bfe7fab3f9902c272929d607fa0ab147"' : 'data-bs-target="#xs-components-links-module-AppModule-a605398d36968d8f8d2e38b87813176fb7e3dc48c328b65b8922896f02f1c81660ca53dfcb531a8a20110396c30ca7c5bfe7fab3f9902c272929d607fa0ab147"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a605398d36968d8f8d2e38b87813176fb7e3dc48c328b65b8922896f02f1c81660ca53dfcb531a8a20110396c30ca7c5bfe7fab3f9902c272929d607fa0ab147"' :
                                            'id="xs-components-links-module-AppModule-a605398d36968d8f8d2e38b87813176fb7e3dc48c328b65b8922896f02f1c81660ca53dfcb531a8a20110396c30ca7c5bfe7fab3f9902c272929d607fa0ab147"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarritoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarritoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarruselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarruselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetalleProductoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetalleProductoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a605398d36968d8f8d2e38b87813176fb7e3dc48c328b65b8922896f02f1c81660ca53dfcb531a8a20110396c30ca7c5bfe7fab3f9902c272929d607fa0ab147"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a605398d36968d8f8d2e38b87813176fb7e3dc48c328b65b8922896f02f1c81660ca53dfcb531a8a20110396c30ca7c5bfe7fab3f9902c272929d607fa0ab147"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a605398d36968d8f8d2e38b87813176fb7e3dc48c328b65b8922896f02f1c81660ca53dfcb531a8a20110396c30ca7c5bfe7fab3f9902c272929d607fa0ab147"' :
                                        'id="xs-injectables-links-module-AppModule-a605398d36968d8f8d2e38b87813176fb7e3dc48c328b65b8922896f02f1c81660ca53dfcb531a8a20110396c30ca7c5bfe7fab3f9902c272929d607fa0ab147"' }>
                                        <li class="link">
                                            <a href="injectables/CargandoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CargandoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-PipesModule-bf935b0619856477d56e837ee327627b147c50089bb229992e96fd87717c22e7235073b91c7c7145c55317371ae7d64974ec72816acc1eaa0a649895c0c0855e"' : 'data-bs-target="#xs-pipes-links-module-PipesModule-bf935b0619856477d56e837ee327627b147c50089bb229992e96fd87717c22e7235073b91c7c7145c55317371ae7d64974ec72816acc1eaa0a649895c0c0855e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-bf935b0619856477d56e837ee327627b147c50089bb229992e96fd87717c22e7235073b91c7c7145c55317371ae7d64974ec72816acc1eaa0a649895c0c0855e"' :
                                            'id="xs-pipes-links-module-PipesModule-bf935b0619856477d56e837ee327627b147c50089bb229992e96fd87717c22e7235073b91c7c7145c55317371ae7d64974ec72816acc1eaa0a649895c0c0855e"' }>
                                            <li class="link">
                                                <a href="pipes/BuscadorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscadorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ProductosService.html" data-type="entity-link" >ProductosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreService.html" data-type="entity-link" >StoreService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/LoadingService.html" data-type="entity-link" >LoadingService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Producto.html" data-type="entity-link" >Producto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});