---
sidebar_position: 3
---

# Models

Models are ready-to-use, pre-trained machine learning models shared on Forest Stack. Users can download these models or test them directly on the platform to solve specific tasks like text classification, image recognition, or prediction.

---

## Models Listing Page

The Models Listing page provides a central hub for discovering, evaluating, and accessing pre-trained Models. Users can quickly locate the right model via the search bar, refine the list with sort and filter controls, and review key details on each model’s card before diving into model-specific documentation or testing environments.
![Models Listing Page](./img/fig_ai_models_listing_page.png)
_Models Listing Page_

### Models Search
Positioned at the top of the page, the Models search bar lets users enter keywords (e.g., “translation,” “disease detection”) to instantly narrow the Models list.
![Models Search Bar](./img/fig_ai_models_search_bar.png)
_Models Search Bar_

### Filter Feature
The Model filter panel enables users to narrow the model listing by multiple criteria:
- **Organisation Type**:
  - All: Includes Models from every source.
  - Public: Models published by government departments or publicly funded entities.
  - Private: Models contributed by private companies or startups.
  - Academic Institution: Models originating from universities and research institutes.
  - Other: Models from NGOs, community groups, or any other type of Data Provider Entity.
- **Industry**: Applying an industry filter limits results to Models tagged under those sectors. Type to search or select one or more industries—such as Healthcare, Financial Services, Agriculture, Manufacturing, Energy, Education and more.
- **Model Type**: Model categories such as Text Classification, Image Classification, Object Detection, Named Entity Recognition, Speech-to-Text, Text Summarization, Sentiment Analysis, Time Series Forecasting, Clustering, Anomaly Detection, Recommendation, Language Translation, Question Answering, Text Generation, Semantic Search, and many more.
- **File Format**: This filter helps in listing Models with specific file formats
  - Traditional ML: PKL, JOBLIB, SAV, RDS
  - Deep Learning (TensorFlow / Keras): HDF5, PB, TFLITE, KERAS
  - Deep Learning (PyTorch): PT, PTH, CKPT
  - Cross-Framework / Optimized: ONNX, SAFETENSORS, TRT
  - Enterprise/Interchange: MLMODEL, TFLITE, PMML, JSON, BIN
  - Other
- **Permission**:
  - Open: Publicly available Models with immediate download access.
  - Restricted: Models requiring approval or elevated permissions to download.
- **Last Updated**: Restrict results to Models updated in last 7 days, last 30 days, last 1 year or within a custom date range.

![Models Filter options](./img/fig_ai_models_filter_options.png)
_Models Filter options_

### Model Card
Each model card provides a snapshot of the following key information:
- **Access Status** - "Open" or "Restricted" badge
- **Publishing Data Provider Entity**
- **Title**
- **Short description**
- **Tags**
- **File format**
- **Last updated date**
- **Action Button**: "View Model" to open the full details and download options

![Model Cards](./img/fig_ai_model_cards.png)
_Model Cards_

---

## Model Details

When users select a Model card, they arrive at the Model Detail page, which is organized into the following sections:

### Page Header & Actions
- **Breadcrumb Trail**: Shows “Home / Models / [Model Name]” so users know their location.
- **Model Title & Permission**: The model’s name (e.g., “Telugu Grievance Classification Model”) is accompanied by an Open or Restricted badge.
- **Download Button**: For Open models, users can immediately download the model archive; for Restricted models, this button becomes active once access is granted.
### Description 
- A concise summary describing the model's purpose, key capabilities.
### Tags
- Keywords (e.g., "Grievance," "Classification") that show the model's domains and functions.

### Model Details Panel
A structured metadata table presents:
- **Data Provider Entity**: The government department, agency or entity that has the ownership of the published model.
- **Industry**: The sector classification—such as Public Services, Healthcare or Agriculture—that indicates the model’s primary domain, if any. If model is not associated to any industry, it is depicted as sector agnostic
- **Uploaded By**: The individual or team (and their organisation) that submitted the model to Forest Stack.
- **Model Permission**: Access level (Open or Restricted)
- **Last Updated**: Timestamp of the most recent update of the model
- **License**: Governing usage terms (e.g., Apache 2.0)
- **Model Type**: Task category (e.g., Text Classification)
- **File Type**: Format of the model bundle (e.g., Safetensors)
- **File Size**: Download size of complete model repository

![Models detail page](./img/fig_ai_models_detail_page.png)
_Models detail page_

---

## Model Upload

### Step 1: Click on ‘Start adding Model’ and then, set up your Model.
1. **Model Title**: Enter a concise, descriptive name that clearly reflects the model's function (e.g., "Telugu Grievance Classification Model")
2. **Model Permission**:
   - **Open**: The model is publicly accessible—any user can download or invoke it immediately without approval.
   - **Restricted**: Access requires approval from the publisher of that particular Model.
   - **Private**: The model is visible and usable only by the publisher. 
3. **Metadata Entry Options**:
   - **Enter Metadata Manually**: Opens a form where you have to fill short/long descriptions, tags and structured fields from scratch.
   - **Import from JSON**: Upload an existing Forest Stack-compatible JSON manifest to pre-populate all metadata fields—ideal for automated workflows or bulk model registrations.

![Clicking on Start adding Model](./img/fig_clicking_on_start_adding_ai_model.png)
_Clicking on 'Start adding Model'_

`-
![Set up your Model](./img/fig_set_up_your_ai_model.png)
_Add Model_
-
![Set up your Model](./img/fig_set_up_your_ai_model.png)
_Set up your Model_

### Step 2: Provide Model Information
Once the basic setup is complete, fill in the model’s descriptive and structured metadata:
- **Short Description**: A One- or two-sentence summary of the model's task and capabilities
- **Tags**: Add up to five keywords that aid discovery (e.g., “Text Classification,” “NLP,” “Grievance”).
- **Long Description**:  In the long description, users should clearly explain what the model is meant to do, what kind of input it takes and what output it gives. They should also mention key features like support for different languages, the ability to customize outputs. Finally, it’s helpful to describe how the model can be used or where it can be applied.
- **Model Details**:
  - **Data Provider Entity**: The government department, agency or entity that has the ownership of the published dataset.
  - **Organisation Type**: Public, Private, Academic, NGO/Non-profit, or Other
  - **Uploaded By**: Please mention your user name, team name or Data Provider Entity
  - **License**: Legal terms governing model reuse (e.g., Apache 2.0).
  - **File Size**: Approximate download size (e.g., 100 MB).
  - **Model Type**: AI task category (Text Classification, Object Detection, etc.)
  - **File Format**: Bundle format(s) supported (SAFETENSORS, ONNX, PKL, etc.)
  - **Industry**: Select sector classification—such as Healthcare or Agriculture—that indicates the model’s primary domain, if any. If model is not associated to any industry, please select sector agnostic.
  - **Media URL**: URL link for the Model (e.g., GitHub link)

![Enter Model Information](./img/fig_enter_ai_model_information1.png)

![Enter Model Information](./img/fig_enter_ai_model_information2.png)

### Step 3: Upload Your Model
If the user provides a Media URL, the Model will be created automatically in Step 2. However, if no Media URL is entered, the user will be directed to Step 3 to proceed with manual file upload. In this step, users must upload the relevant files according to the file format selected in Step 2. They have the option to upload multiple files using the "Upload More" button. Additionally, users can clear or delete any previously uploaded files and upload new files or an entirely new set using the **Clear All** button.
![Uploading Model](./img/fig_uploading_ai_model.png)
_Need to upload the IMAGE_

### Step 4: Review and Publish
Before publishing, review all details including the short and long descriptions, tags, metadata fields, and uploaded files to ensure accuracy. Confirm that the correct permission level is selected. Once everything is verified, click Publish to proceed.Open Models go live immediately and are discoverable by all users.

### Step 5: Approval
Approval requests are sent to the Organisation Manager for review. Once they approve, the Model gets published on the Model listing page.

---

## Model Download

- **Open**: For 'Open' Models, users can simply click the **Download** button on the model detail page. The model file is immediately packaged and begins downloading without any additional steps or approvals.
- **Restricted**: For 'Restricted' Models, users must first request access by clicking the **Request Access** button on the detail page. A form will appear prompting the user to provide a brief justification. Once submitted, the request is sent to the model's publisher or organisation manager for approval. After approval, the user receives an email notification and the **Download** button becomes active on the detail page, allowing them to retrieve the model file.
![Model Download](./img/fig_ai_model_download.png)
_Model Download_
