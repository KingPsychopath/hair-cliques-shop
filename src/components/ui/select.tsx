"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    onValueChange: (value: string) => void;
    options: SelectOption[];
    className?: string;
    id?: string;
}

export function Select({ value, onValueChange, options, className, id }: SelectProps) {
    return (
        <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
            <SelectPrimitive.Trigger
                id={id}
                className={cn(
                    "flex h-10 w-full items-center justify-between rounded-md border border-pink-200 bg-white px-3 py-2 text-sm text-pink-700 ring-offset-white placeholder:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
            >
                <SelectPrimitive.Value>
                    {options.find(opt => opt.value === value)?.label || "Select an option"}
                </SelectPrimitive.Value>
                <SelectPrimitive.Icon>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Content
                    className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-pink-200 bg-white text-pink-700 shadow-md animate-in fade-in-80"
                    position="popper"
                    sideOffset={5}
                >
                    <SelectPrimitive.Viewport className="p-1">
                        {options.map((option) => (
                            <SelectPrimitive.Item
                                key={option.value}
                                value={option.value}
                                className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-pink-100 data-[highlighted]:text-pink-700"
                            >
                                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                    <SelectPrimitive.ItemIndicator>
                                        <span className="h-2 w-2 rounded-full bg-pink-500" />
                                    </SelectPrimitive.ItemIndicator>
                                </span>
                                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                            </SelectPrimitive.Item>
                        ))}
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    );
}
