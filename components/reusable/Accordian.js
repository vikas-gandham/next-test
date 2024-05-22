export default function Accordian() {
  return (
    <div className="p-10">
      <div class="max-w-md mx-auto">
        <div class="border rounded-lg">
          <div class="border-b">
            <button class="w-full py-2 px-4 text-left font-semibold bg-gray-200 hover:bg-gray-300">
              Section 1
            </button>
          </div>
          <div class="overflow-hidden transition-all max-h-0 duration-500">
            <div class="p-4">Content for section 1 goes here.</div>
          </div>
          <div class="border-b">
            <button class="w-full py-2 px-4 text-left font-semibold bg-gray-200 hover:bg-gray-300">
              Section 2
            </button>
          </div>
          <div class="overflow-hidden transition-all max-h-0 duration-500">
            <div class="p-4">Content for section 2 goes here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
