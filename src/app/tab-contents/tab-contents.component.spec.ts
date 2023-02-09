import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentsComponent } from './tab-contents.component';

describe('TabContentsComponent', () => {
  let component: TabContentsComponent;
  let fixture: ComponentFixture<TabContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
