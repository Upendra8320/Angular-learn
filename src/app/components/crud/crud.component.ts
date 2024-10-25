import { Component, inject, OnInit } from '@angular/core';
import { crudForm } from '../../interface/IForm';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { TodosStore } from '../../store/todos.store';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent implements OnInit {
  store = inject(TodosStore);
  formData: crudForm = {
    email: '',
    password: '',
  };
  crudDataArray: any = [];
  isEdit: boolean = false;
  editIndex: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.loadTodos().then(() => {
      // this.crudDataArray = this.store.todos;
      console.log("Todos loaded successfully");
      console.log(this.store.todos);
    });
  }

  async loadTodos() {
    await this.store.loadAll();
  }

  handleSubmit() {
    if (this.isEdit && this.editIndex !== null) {
      // Update existing data
      this.crudDataArray[this.editIndex] = { ...this.formData };
      this.isEdit = false;
      this.editIndex = null;
    } else {
      // Add new data
      if (this.formData.email === '' || this.formData.password === '') {
        alert('Please enter email and password');
        return;
      }
      this.crudDataArray.push({ ...this.formData });
    }

    // Reset formData
    this.formData.email = '';
    this.formData.password = '';
  }

  editData(index: number) {
    this.isEdit = true;
    this.editIndex = index;
    this.formData = { ...this.crudDataArray[index] }; // Populate formData with the selected item
  }

  deleteData(index: number) {
    this.crudDataArray.splice(index, 1); // Remove item from array
  }
}
