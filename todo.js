 let title = document.getElementById('tittle');
 let description = document.getElementById('description');
 let priority = document.getElementsByName('priority');
 let addTodo = document.getElementById('addTodo');

async function _addTodo() {
  let selectedPriority;

  console.log("Email:", title.value);
  console.log("Description:", description.value);

  for (let p of priority) {
    if (p.checked) {
      selectedPriority = p.value;
    }
  }

  if (!title.value || !description.value) {
    alert('Please fill this form');
    return;
  }

  try {
    const { error } = await supabase.from('Todos').insert({ 
      title: title.value,
      priority: selectedPriority,
      description: description.value
    });

    if (error) {
      alert('Error in creating: ' + error.message);
    } else {
      alert('Done ✅');
    }
  } catch (err) {
    alert('Error in adding data: ' + err.message);
  }
}

addTodo.addEventListener('click', _addTodo);
