import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MOption } from '../../models/common.model';

@Component({
    selector: 'app-dropdown-a',
    templateUrl: './dropdown-a.component.html',
    styleUrls: ['./dropdown-a.component.css']
})
export class DropdownAComponent implements OnInit {

    @ViewChild('dropdown', { static: true }) dropdownEl: ElementRef
    @ViewChild('dropdown_input', { static: true }) inputEl: ElementRef

    @Input() options: MOption[];
    @Input() disabled: boolean;
    @Input() placeholder: string;

    @Output('onSelect') onSelectOutput = new EventEmitter<any>()

    searchOptions: MOption[]
    searchValue: string
    expand: boolean
    selectedValue: MOption

    constructor() {
        this.dropdownEl = {} as ElementRef
        this.inputEl = {} as ElementRef

        this.options = []
        this.disabled = false
        this.placeholder = 'Options'

        this.searchValue = ''
        this.searchOptions = []
        this.expand = false
        this.selectedValue = {
            value: '',
            name: this.placeholder
        }
    }

    ngOnInit(): void {
        this.searchOptions = this.options ? [...this.options] : []
    }

    ngAfterViewInit() {
        document.addEventListener('click', this.closeMenu.bind(this));
    }

    closeMenu(e: Event) {
        const el = this.dropdownEl.nativeElement;

        if (el && !el.contains(e.target)) {
            this.expand = false;
            document.removeEventListener('click', this.closeMenu);
        }
    }

    search(e: any) {
        this.searchValue = e.target.value.toLowerCase()
        this.searchOptions = this.options.filter(i => i.name.toLowerCase().includes(this.searchValue))
    }

    toggleShow() {
        this.expand = !this.expand
    }

    selectValue(item: MOption) {
        this.searchOptions = this.options.filter(i => i.value !== item.value)
        this.toggleShow()
        this.inputEl.nativeElement.value = item.name

        this.onSelectOutput.emit(this.selectedValue)
    }

    setValue(value: string) {
        this.selectedValue =
            this.options.find(i => i.value === value)
            || { value: '', name: 'Not Found' }
        this.inputEl.nativeElement.value = this.selectedValue.name
        this.searchOptions.filter(i => i.value !== value)
    }
}
