import { Component } from '@angular/core';

@Component({
  selector: 'app-processing-fee-form',
  templateUrl: './processing-fee-form.component.html',
  styleUrls: ['./processing-fee-form.component.css']
})
export class ProcessingFeeFormComponent {
  name: string = '';
  processingFee: string = '';
  feeAmount: number | null = null;
  insuranceFee: number | null = null;
  submittedDate: string = '';

  submissions: any[] = [];
  searchTerm: string = '';

  onSubmit() {
    const submission = {
      name: this.name,
      processingFee: this.processingFee,
      feeAmount: this.feeAmount,
      insuranceFee: this.insuranceFee,
      submittedDate: this.submittedDate
    };

    this.submissions.push(submission);

  
    this.name = '';
    this.processingFee = '';
    this.feeAmount = null;
    this.insuranceFee = null;
    this.submittedDate = '';

    console.log('Submission:', submission);
  }

  get filteredSubmissions() {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    return this.submissions.filter(submission => 
      submission.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      submission.processingFee.toLowerCase().includes(lowerCaseSearchTerm) ||
      (submission.feeAmount !== null && submission.feeAmount.toString().includes(lowerCaseSearchTerm)) ||
      (submission.insuranceFee !== null && submission.insuranceFee.toString().includes(lowerCaseSearchTerm)) ||
      submission.submittedDate.includes(lowerCaseSearchTerm)
    );
  }
}
