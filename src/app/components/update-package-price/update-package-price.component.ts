import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from 'src/app/service/package.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-package-price',
  templateUrl: './update-package-price.component.html',
  styleUrls: ['./update-package-price.component.css']
})
export class UpdatePackagePriceComponent implements OnInit {
  aPackage!: string;
  constructor(private packageService: PackageService, private actRoutter: ActivatedRoute,private router:Router) { }
  updateForm!: FormGroup;
  ngOnInit(): void {

    this.updateForm = new FormGroup({
      packageName: new FormControl('', Validators.required),
      packageDescription: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    })





    this.packageService.getPackage(this.actRoutter.snapshot.params['name']).subscribe(
      (response) => {
        console.log(response);
        this.updateForm = new FormGroup({
          packageName: new FormControl(response['packageName']),
          packageDescription: new FormControl(response['packageDescription']),
          price: new FormControl(response['price'])
        }
        );
        this.aPackage = response.packageName;
      }

    )

  }

  get packageName() {
    return this.updateForm.get('packageName')
  }

  update() {
    this.updateForm.patchValue({ packageName: this.aPackage })
    this.packageService.updatePackage(this.updateForm.value).subscribe(
      response => console.warn(response)
     
    );

    Swal.fire({
      title:"Updated successgully",
      icon:'success',
      timer:1000
    })

this.router.navigate(['admin/all-packages'])
  }

}
