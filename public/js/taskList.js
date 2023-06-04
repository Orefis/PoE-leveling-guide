const endpoint = '/tasks';

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const tableElement = document.createElement('table');
    const tableBodyElement = document.createElement('tbody');

    const headerRowElement = document.createElement('tr');
    const actHeaderCell = document.createElement('th');
    const taskNameHeaderCell = document.createElement('th');
    const taskDescHeaderCell = document.createElement('th');

    actHeaderCell.textContent = 'ACT';
    actHeaderCell.classList.add('table-header');
    taskNameHeaderCell.textContent = 'NAME';
    taskNameHeaderCell.classList.add('table-header');
    taskDescHeaderCell.textContent = 'DESCRIPTION';
    taskDescHeaderCell.classList.add('table-header');

    headerRowElement.appendChild(actHeaderCell);
    headerRowElement.appendChild(taskNameHeaderCell);
    headerRowElement.appendChild(taskDescHeaderCell);
    tableBodyElement.appendChild(headerRowElement);

    data.forEach(task => {
      const rowElement = document.createElement('tr');
      const actCell = document.createElement('td');
      const taskNameCell = document.createElement('td');
      const taskDescCell = document.createElement('td');

      actCell.textContent = task.act;
      taskNameCell.textContent = task.task_name;
      taskDescCell.textContent = task.task_desc;

      rowElement.appendChild(actCell);
      rowElement.appendChild(taskNameCell);
      rowElement.appendChild(taskDescCell);
      tableBodyElement.appendChild(rowElement);
    });

    tableElement.appendChild(tableBodyElement);

    const allTasksElement = document.querySelector('.allTasksFromEndpoint');
    allTasksElement.appendChild(tableElement);
  })
  .catch(error => {
    console.log('Wystąpił błąd:', error);
  });
