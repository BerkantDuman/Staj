import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplelistComponent } from './peoplelist.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule, RouterEvent } from '@angular/router';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';

describe('PeoplelistComponent', () => {
  let component: PeoplelistComponent;
  let fixture: ComponentFixture<PeoplelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PeoplelistComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });


});
