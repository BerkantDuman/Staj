import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplelistComponent } from './peoplelist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PeopleService } from '../people.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';


describe('PeoplelistComponent', () => {
  let component: PeoplelistComponent;
  let fixture: ComponentFixture<PeoplelistComponent>;

  let routerLinks: RouterLinkDirectiveStub[];
  let linkDes: DebugElement[];



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PeoplelistComponent,
        RouterLinkDirectiveStub
        
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PeopleService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkDirectiveStub));

    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /*it('can get RouterLinks from template', () => {
    
    expect(routerLinks.length).toBe(1, 'should have 3 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/details/:id');
  });


  it('can click Detail link in template', () => {
    const detailLinkDe = linkDes[0];   // heroes link DebugElement
    const detailLink = routerLinks[0]; // heroes link directive

    expect(detailLink.navigatedTo).toBeNull('should not have navigated yet');

    detailLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(detailLink.navigatedTo).toBe('/details/:id');
  });*/

});
