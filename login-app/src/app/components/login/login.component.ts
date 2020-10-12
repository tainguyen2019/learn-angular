import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  accountList = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  async submitForm() {
    if (this.form.valid) {
      //Get role account
      await this.dataService
        .getAccountList()
        .then((result) => (this.accountList = result as []))
        .catch((e) => console.log(e));

      const account = this.form.value;
      const findAccount = this.accountList.find(
        (a) => a.username == account.username && a.password == account.password
      );
      if (findAccount) {
        const role = findAccount.role;
        localStorage.setItem(
          'account',
          JSON.stringify({ ...account, role })
        );
        if (role == 'user') {
          this.router.navigateByUrl('');
        } else {
          this.router.navigateByUrl('admin');
        }
      } else {
        alert('Fail to login');
      }
    }
  }
}
