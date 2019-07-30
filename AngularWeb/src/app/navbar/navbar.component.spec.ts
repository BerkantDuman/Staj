import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { NavbarComponent } from './navbar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';



describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let routerLinks: RouterLinkDirectiveStub[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        RouterLinkDirectiveStub
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkDirectiveStub));

    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });


  it('can get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(1, 'should have 1 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/list');
  });

  it('can click list link in template', () => {
    const listLinkDe = linkDes[0];   
    const listLink = routerLinks[0]; 

    expect(listLink.navigatedTo).toBeNull('should not have navigated yet');

    listLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(listLink.navigatedTo).toBe('/list');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
