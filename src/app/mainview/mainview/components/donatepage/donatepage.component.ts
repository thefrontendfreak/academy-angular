import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donatepage',
  templateUrl: './donatepage.component.html',
  styleUrls: ['./donatepage.component.scss']
})
export class DonatepageComponent implements OnInit {

  faqData = [
    {
      title:"Can I send a check? ",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"Can I donate stock or make donation by wire transfer?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"Are there other ways to donate online, such as cryptocurrency or Square Cash?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"Do you accept employer matches?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"Can I donate in a currency other than US dollars?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"What is the Learners Fund?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"How do I update the credit card information on file for my recurring donation?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"How do I change the amount of my recurring donation?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"How do I cancel my recurring donation?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"Is my donation tax deductible?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"Where is my donation receipt?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"I want to make sure my gift is making a difference. where can I find information about ho this academy uses its funds? ",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    },
    {
      title:"How do I verify Academy's charitable registration compliance for each state?",
      faqText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quia.Qpsum dolor sit amet consectetur adipisicing elit. Ea, minima."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
