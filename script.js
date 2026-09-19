let mainRecentAllNotes = document.querySelector(".main-recent-all-notes");
let recentNotesSection = document.querySelector("#recent-notes-section");
let allNotesGrid = document.querySelector("#all-notes-grid");
let noteModal = document.querySelector("#note-modal");
let modalCloseBtn = document.querySelector("#modal-close-btn");


let notesArray = [
    {
        id: 1,
        title: "Event-Driven Architecture",
        content: "The architecture of the new event bus is based around Kafka topics mapped to domain aggregates. Redis will be utilized strictly for caching the read-models. Ensure that the dead-letter queue is properly monitored in Datadog. Next steps involve writing the Kubernetes deployment manifests and tweaking the GitHub Actions YAML to support parallel testing stages.",
        date: "Oct 12",
        lastOpened: null
    },
    {
        id: 2,
        title: "Groceries",
        content: "Buy coffee beans (Ethiopian Yirgacheffe, light roast) and unflavored almond milk.",
        date: "Oct 10",
        lastOpened: null
    },
    {
        id: 3,
        title: "Onboarding UX Sync",
        content: "Discussed the new user onboarding flow today. We need to reduce the cognitive load by breaking down the setup into 3 distinct steps instead of a single long form. Defer the profile picture upload entirely until the user's second session.",
        date: "July 12",
        lastOpened: null
    },

]


mainRecentAllNotes.addEventListener("click", (e) => {

    if (e.target.closest(".note-card")) {
        console.log("article clicked!")

        noteModal.classList.remove("hidden");
        modalCloseBtn.addEventListener("click", () => {
            noteModal.classList.add("hidden");
        })
    }

})


let renderArray = () => {

    let recentNotes = notesArray.filter(note => note.lastOpened !== null);
    let otherNotes = notesArray.filter(note => note.lastOpened === null);

    allNotesGrid.innerHTML = "";
    
    otherNotes.forEach(note => {

        allNotesGrid.innerHTML += `
            <article data-id="${note.id}" id = "note-2" class="note-card bg-[#121214] rounded-2xl p-6 border border-[#1F1F23]/60 cursor-pointer hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-48" >
                    <div class="note-card-content text-zinc-200 text-[15px] leading-relaxed overflow-hidden line-clamp-4">
                        ${note.content}
                    </div>
                    <div class="note-card-title text-sm font-medium text-zinc-400 mt-4 border-t border-[#1F1F23] pt-3 flex items-center justify-between">
                        <span>${note.title}</span>
                        <span class="text-xs font-normal text-zinc-600">${note.date}</span>
                    </div>
                </article >
                `


})

}

renderArray();