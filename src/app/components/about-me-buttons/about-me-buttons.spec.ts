import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeButtons } from './about-me-buttons';

describe('AboutMeButtons', () => {
  let component: AboutMeButtons;
  let fixture: ComponentFixture<AboutMeButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
