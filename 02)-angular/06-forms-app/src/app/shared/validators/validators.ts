import { FormControl } from "@angular/forms";

export const firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cantBeStrider = ( control : FormControl ) =>{
  const value : string = control.value.trim().toLowerCase()
  console.log('--', value,  control.value)
  if(value === 'strider'){
    console.log('es strider')
    return {
      noStrider: true
    }
  }
  return null
}
