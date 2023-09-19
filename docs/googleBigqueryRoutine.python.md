# `google_bigquery_routine`

Refer to the Terraform Registory for docs: [`google_bigquery_routine`](https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine).

# `googleBigqueryRoutine` Submodule <a name="`googleBigqueryRoutine` Submodule" id="@cdktf/provider-google-beta.googleBigqueryRoutine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryRoutine <a name="GoogleBigqueryRoutine" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine google_bigquery_routine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  definition_body: str,
  routine_id: str,
  arguments: typing.Union[IResolvable, typing.List[GoogleBigqueryRoutineArguments]] = None,
  description: str = None,
  determinism_level: str = None,
  id: str = None,
  imported_libraries: typing.List[str] = None,
  language: str = None,
  project: str = None,
  return_table_type: str = None,
  return_type: str = None,
  routine_type: str = None,
  timeouts: GoogleBigqueryRoutineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.definitionBody">definition_body</a></code> | <code>str</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.routineId">routine_id</a></code> | <code>str</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.determinismLevel">determinism_level</a></code> | <code>str</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.importedLibraries">imported_libraries</a></code> | <code>typing.List[str]</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.language">language</a></code> | <code>str</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.returnTableType">return_table_type</a></code> | <code>str</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.returnType">return_type</a></code> | <code>str</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.routineType">routine_type</a></code> | <code>str</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#dataset_id GoogleBigqueryRoutine#dataset_id}

---

##### `definition_body`<sup>Required</sup> <a name="definition_body" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.definitionBody"></a>

- *Type:* str

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#definition_body GoogleBigqueryRoutine#definition_body}

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.routineId"></a>

- *Type:* str

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#routine_id GoogleBigqueryRoutine#routine_id}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.arguments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#arguments GoogleBigqueryRoutine#arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.description"></a>

- *Type:* str

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#description GoogleBigqueryRoutine#description}

---

##### `determinism_level`<sup>Optional</sup> <a name="determinism_level" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.determinismLevel"></a>

- *Type:* str

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#determinism_level GoogleBigqueryRoutine#determinism_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imported_libraries`<sup>Optional</sup> <a name="imported_libraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.importedLibraries"></a>

- *Type:* typing.List[str]

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#imported_libraries GoogleBigqueryRoutine#imported_libraries}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.language"></a>

- *Type:* str

The language of the routine. Possible values: ["SQL", "JAVASCRIPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#language GoogleBigqueryRoutine#language}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}.

---

##### `return_table_type`<sup>Optional</sup> <a name="return_table_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.returnTableType"></a>

- *Type:* str

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#return_table_type GoogleBigqueryRoutine#return_table_type}

---

##### `return_type`<sup>Optional</sup> <a name="return_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.returnType"></a>

- *Type:* str

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#return_type GoogleBigqueryRoutine#return_type}

---

##### `routine_type`<sup>Optional</sup> <a name="routine_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.routineType"></a>

- *Type:* str

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#routine_type GoogleBigqueryRoutine#routine_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#timeouts GoogleBigqueryRoutine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments">put_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeterminismLevel">reset_determinism_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetImportedLibraries">reset_imported_libraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnTableType">reset_return_table_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnType">reset_return_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetRoutineType">reset_routine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_arguments` <a name="put_arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments"></a>

```python
def put_arguments(
  value: typing.Union[IResolvable, typing.List[GoogleBigqueryRoutineArguments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}.

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_determinism_level` <a name="reset_determinism_level" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeterminismLevel"></a>

```python
def reset_determinism_level() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_imported_libraries` <a name="reset_imported_libraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetImportedLibraries"></a>

```python
def reset_imported_libraries() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_return_table_type` <a name="reset_return_table_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnTableType"></a>

```python
def reset_return_table_type() -> None
```

##### `reset_return_type` <a name="reset_return_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnType"></a>

```python
def reset_return_type() -> None
```

##### `reset_routine_type` <a name="reset_routine_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetRoutineType"></a>

```python
def reset_routine_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutine.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList">GoogleBigqueryRoutineArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference">GoogleBigqueryRoutineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.argumentsInput">arguments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBodyInput">definition_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevelInput">determinism_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibrariesInput">imported_libraries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableTypeInput">return_table_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTypeInput">return_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineIdInput">routine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineTypeInput">routine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBody">definition_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevel">determinism_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibraries">imported_libraries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableType">return_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineId">routine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineType">routine_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.arguments"></a>

```python
arguments: GoogleBigqueryRoutineArgumentsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList">GoogleBigqueryRoutineArgumentsList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeouts"></a>

```python
timeouts: GoogleBigqueryRoutineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference">GoogleBigqueryRoutineTimeoutsOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.argumentsInput"></a>

```python
arguments_input: typing.Union[IResolvable, typing.List[GoogleBigqueryRoutineArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `definition_body_input`<sup>Optional</sup> <a name="definition_body_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBodyInput"></a>

```python
definition_body_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `determinism_level_input`<sup>Optional</sup> <a name="determinism_level_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevelInput"></a>

```python
determinism_level_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `imported_libraries_input`<sup>Optional</sup> <a name="imported_libraries_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibrariesInput"></a>

```python
imported_libraries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `return_table_type_input`<sup>Optional</sup> <a name="return_table_type_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableTypeInput"></a>

```python
return_table_type_input: str
```

- *Type:* str

---

##### `return_type_input`<sup>Optional</sup> <a name="return_type_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTypeInput"></a>

```python
return_type_input: str
```

- *Type:* str

---

##### `routine_id_input`<sup>Optional</sup> <a name="routine_id_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineIdInput"></a>

```python
routine_id_input: str
```

- *Type:* str

---

##### `routine_type_input`<sup>Optional</sup> <a name="routine_type_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineTypeInput"></a>

```python
routine_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigqueryRoutineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `definition_body`<sup>Required</sup> <a name="definition_body" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBody"></a>

```python
definition_body: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `determinism_level`<sup>Required</sup> <a name="determinism_level" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevel"></a>

```python
determinism_level: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `imported_libraries`<sup>Required</sup> <a name="imported_libraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibraries"></a>

```python
imported_libraries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `return_table_type`<sup>Required</sup> <a name="return_table_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableType"></a>

```python
return_table_type: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

---

##### `routine_type`<sup>Required</sup> <a name="routine_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineType"></a>

```python
routine_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryRoutineArguments <a name="GoogleBigqueryRoutineArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutineArguments(
  argument_kind: str = None,
  data_type: str = None,
  mode: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.argumentKind">argument_kind</a></code> | <code>str</code> | Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.dataType">data_type</a></code> | <code>str</code> | A JSON schema for the data type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.mode">mode</a></code> | <code>str</code> | Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.name">name</a></code> | <code>str</code> | The name of this argument. Can be absent for function return argument. |

---

##### `argument_kind`<sup>Optional</sup> <a name="argument_kind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.argumentKind"></a>

```python
argument_kind: str
```

- *Type:* str

Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#argument_kind GoogleBigqueryRoutine#argument_kind}

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

A JSON schema for the data type.

Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#data_type GoogleBigqueryRoutine#data_type}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#mode GoogleBigqueryRoutine#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this argument. Can be absent for function return argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#name GoogleBigqueryRoutine#name}

---

### GoogleBigqueryRoutineConfig <a name="GoogleBigqueryRoutineConfig" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  definition_body: str,
  routine_id: str,
  arguments: typing.Union[IResolvable, typing.List[GoogleBigqueryRoutineArguments]] = None,
  description: str = None,
  determinism_level: str = None,
  id: str = None,
  imported_libraries: typing.List[str] = None,
  language: str = None,
  project: str = None,
  return_table_type: str = None,
  return_type: str = None,
  routine_type: str = None,
  timeouts: GoogleBigqueryRoutineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.definitionBody">definition_body</a></code> | <code>str</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineId">routine_id</a></code> | <code>str</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.description">description</a></code> | <code>str</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.determinismLevel">determinism_level</a></code> | <code>str</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.importedLibraries">imported_libraries</a></code> | <code>typing.List[str]</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.language">language</a></code> | <code>str</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnTableType">return_table_type</a></code> | <code>str</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnType">return_type</a></code> | <code>str</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineType">routine_type</a></code> | <code>str</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#dataset_id GoogleBigqueryRoutine#dataset_id}

---

##### `definition_body`<sup>Required</sup> <a name="definition_body" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.definitionBody"></a>

```python
definition_body: str
```

- *Type:* str

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#definition_body GoogleBigqueryRoutine#definition_body}

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#routine_id GoogleBigqueryRoutine#routine_id}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.arguments"></a>

```python
arguments: typing.Union[IResolvable, typing.List[GoogleBigqueryRoutineArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#arguments GoogleBigqueryRoutine#arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#description GoogleBigqueryRoutine#description}

---

##### `determinism_level`<sup>Optional</sup> <a name="determinism_level" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.determinismLevel"></a>

```python
determinism_level: str
```

- *Type:* str

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#determinism_level GoogleBigqueryRoutine#determinism_level}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imported_libraries`<sup>Optional</sup> <a name="imported_libraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.importedLibraries"></a>

```python
imported_libraries: typing.List[str]
```

- *Type:* typing.List[str]

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#imported_libraries GoogleBigqueryRoutine#imported_libraries}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.language"></a>

```python
language: str
```

- *Type:* str

The language of the routine. Possible values: ["SQL", "JAVASCRIPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#language GoogleBigqueryRoutine#language}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}.

---

##### `return_table_type`<sup>Optional</sup> <a name="return_table_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnTableType"></a>

```python
return_table_type: str
```

- *Type:* str

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#return_table_type GoogleBigqueryRoutine#return_table_type}

---

##### `return_type`<sup>Optional</sup> <a name="return_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#return_type GoogleBigqueryRoutine#return_type}

---

##### `routine_type`<sup>Optional</sup> <a name="routine_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineType"></a>

```python
routine_type: str
```

- *Type:* str

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#routine_type GoogleBigqueryRoutine#routine_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryRoutineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#timeouts GoogleBigqueryRoutine#timeouts}

---

### GoogleBigqueryRoutineTimeouts <a name="GoogleBigqueryRoutineTimeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.83.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryRoutineArgumentsList <a name="GoogleBigqueryRoutineArgumentsList" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryRoutineArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigqueryRoutineArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]]

---


### GoogleBigqueryRoutineArgumentsOutputReference <a name="GoogleBigqueryRoutineArgumentsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetArgumentKind">reset_argument_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_argument_kind` <a name="reset_argument_kind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetArgumentKind"></a>

```python
def reset_argument_kind() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKindInput">argument_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKind">argument_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `argument_kind_input`<sup>Optional</sup> <a name="argument_kind_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKindInput"></a>

```python
argument_kind_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `argument_kind`<sup>Required</sup> <a name="argument_kind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKind"></a>

```python
argument_kind: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryRoutineArguments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments">GoogleBigqueryRoutineArguments</a>]

---


### GoogleBigqueryRoutineTimeoutsOutputReference <a name="GoogleBigqueryRoutineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_routine

googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryRoutineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>]

---



