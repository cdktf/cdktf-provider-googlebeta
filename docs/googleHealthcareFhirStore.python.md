# `googleHealthcareFhirStore` Submodule <a name="`googleHealthcareFhirStore` Submodule" id="@cdktf/provider-google-beta.googleHealthcareFhirStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareFhirStore <a name="GoogleHealthcareFhirStore" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store google_healthcare_fhir_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  complex_data_type_reference_parsing: str = None,
  default_search_handling_strict: typing.Union[bool, IResolvable] = None,
  disable_referential_integrity: typing.Union[bool, IResolvable] = None,
  disable_resource_versioning: typing.Union[bool, IResolvable] = None,
  enable_history_import: typing.Union[bool, IResolvable] = None,
  enable_history_modifications: typing.Union[bool, IResolvable] = None,
  enable_update_create: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  notification_config: GoogleHealthcareFhirStoreNotificationConfig = None,
  notification_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreNotificationConfigs]] = None,
  stream_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreStreamConfigs]] = None,
  timeouts: GoogleHealthcareFhirStoreTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.complexDataTypeReferenceParsing">complex_data_type_reference_parsing</a></code> | <code>str</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.defaultSearchHandlingStrict">default_search_handling_strict</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.disableReferentialIntegrity">disable_referential_integrity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.disableResourceVersioning">disable_resource_versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableHistoryImport">enable_history_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableHistoryModifications">enable_history_modifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableUpdateCreate">enable_update_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.notificationConfigs">notification_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]</code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.streamConfigs">stream_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]</code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.version">version</a></code> | <code>str</code> | The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.dataset"></a>

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#dataset GoogleHealthcareFhirStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.name"></a>

- *Type:* str

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#name GoogleHealthcareFhirStore#name}

---

##### `complex_data_type_reference_parsing`<sup>Optional</sup> <a name="complex_data_type_reference_parsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.complexDataTypeReferenceParsing"></a>

- *Type:* str

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#complex_data_type_reference_parsing GoogleHealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `default_search_handling_strict`<sup>Optional</sup> <a name="default_search_handling_strict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.defaultSearchHandlingStrict"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#default_search_handling_strict GoogleHealthcareFhirStore#default_search_handling_strict}

---

##### `disable_referential_integrity`<sup>Optional</sup> <a name="disable_referential_integrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.disableReferentialIntegrity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#disable_referential_integrity GoogleHealthcareFhirStore#disable_referential_integrity}

---

##### `disable_resource_versioning`<sup>Optional</sup> <a name="disable_resource_versioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.disableResourceVersioning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#disable_resource_versioning GoogleHealthcareFhirStore#disable_resource_versioning}

---

##### `enable_history_import`<sup>Optional</sup> <a name="enable_history_import" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableHistoryImport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#enable_history_import GoogleHealthcareFhirStore#enable_history_import}

---

##### `enable_history_modifications`<sup>Optional</sup> <a name="enable_history_modifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableHistoryModifications"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store.

If set to false, using history bundles fails with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#enable_history_modifications GoogleHealthcareFhirStore#enable_history_modifications}

---

##### `enable_update_create`<sup>Optional</sup> <a name="enable_update_create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.enableUpdateCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#enable_update_create GoogleHealthcareFhirStore#enable_update_create}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#labels GoogleHealthcareFhirStore#labels}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#notification_config GoogleHealthcareFhirStore#notification_config}

---

##### `notification_configs`<sup>Optional</sup> <a name="notification_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.notificationConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#notification_configs GoogleHealthcareFhirStore#notification_configs}

---

##### `stream_configs`<sup>Optional</sup> <a name="stream_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.streamConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#stream_configs GoogleHealthcareFhirStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#timeouts GoogleHealthcareFhirStore#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.version"></a>

- *Type:* str

The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#version GoogleHealthcareFhirStore#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig">put_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs">put_notification_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs">put_stream_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetComplexDataTypeReferenceParsing">reset_complex_data_type_reference_parsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDefaultSearchHandlingStrict">reset_default_search_handling_strict</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableReferentialIntegrity">reset_disable_referential_integrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableResourceVersioning">reset_disable_resource_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryImport">reset_enable_history_import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryModifications">reset_enable_history_modifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableUpdateCreate">reset_enable_update_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfig">reset_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfigs">reset_notification_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetStreamConfigs">reset_stream_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification_config` <a name="put_notification_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig"></a>

```python
def put_notification_config(
  pubsub_topic: str
) -> None
```

###### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig.parameter.pubsubTopic"></a>

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

##### `put_notification_configs` <a name="put_notification_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs"></a>

```python
def put_notification_configs(
  value: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreNotificationConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]

---

##### `put_stream_configs` <a name="put_stream_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs"></a>

```python
def put_stream_configs(
  value: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreStreamConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}.

---

##### `reset_complex_data_type_reference_parsing` <a name="reset_complex_data_type_reference_parsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetComplexDataTypeReferenceParsing"></a>

```python
def reset_complex_data_type_reference_parsing() -> None
```

##### `reset_default_search_handling_strict` <a name="reset_default_search_handling_strict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDefaultSearchHandlingStrict"></a>

```python
def reset_default_search_handling_strict() -> None
```

##### `reset_disable_referential_integrity` <a name="reset_disable_referential_integrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableReferentialIntegrity"></a>

```python
def reset_disable_referential_integrity() -> None
```

##### `reset_disable_resource_versioning` <a name="reset_disable_resource_versioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableResourceVersioning"></a>

```python
def reset_disable_resource_versioning() -> None
```

##### `reset_enable_history_import` <a name="reset_enable_history_import" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryImport"></a>

```python
def reset_enable_history_import() -> None
```

##### `reset_enable_history_modifications` <a name="reset_enable_history_modifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryModifications"></a>

```python
def reset_enable_history_modifications() -> None
```

##### `reset_enable_update_create` <a name="reset_enable_update_create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableUpdateCreate"></a>

```python
def reset_enable_update_create() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_notification_config` <a name="reset_notification_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfig"></a>

```python
def reset_notification_config() -> None
```

##### `reset_notification_configs` <a name="reset_notification_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfigs"></a>

```python
def reset_notification_configs() -> None
```

##### `reset_stream_configs` <a name="reset_stream_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetStreamConfigs"></a>

```python
def reset_stream_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleHealthcareFhirStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleHealthcareFhirStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleHealthcareFhirStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleHealthcareFhirStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareFhirStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference">GoogleHealthcareFhirStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigs">notification_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList">GoogleHealthcareFhirStoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigs">stream_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList">GoogleHealthcareFhirStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference">GoogleHealthcareFhirStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsingInput">complex_data_type_reference_parsing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrictInput">default_search_handling_strict_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrityInput">disable_referential_integrity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioningInput">disable_resource_versioning_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImportInput">enable_history_import_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModificationsInput">enable_history_modifications_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreateInput">enable_update_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigInput">notification_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigsInput">notification_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigsInput">stream_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsing">complex_data_type_reference_parsing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrict">default_search_handling_strict</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrity">disable_referential_integrity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioning">disable_resource_versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImport">enable_history_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModifications">enable_history_modifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreate">enable_update_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfig"></a>

```python
notification_config: GoogleHealthcareFhirStoreNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference">GoogleHealthcareFhirStoreNotificationConfigOutputReference</a>

---

##### `notification_configs`<sup>Required</sup> <a name="notification_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigs"></a>

```python
notification_configs: GoogleHealthcareFhirStoreNotificationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList">GoogleHealthcareFhirStoreNotificationConfigsList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `stream_configs`<sup>Required</sup> <a name="stream_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigs"></a>

```python
stream_configs: GoogleHealthcareFhirStoreStreamConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList">GoogleHealthcareFhirStoreStreamConfigsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeouts"></a>

```python
timeouts: GoogleHealthcareFhirStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference">GoogleHealthcareFhirStoreTimeoutsOutputReference</a>

---

##### `complex_data_type_reference_parsing_input`<sup>Optional</sup> <a name="complex_data_type_reference_parsing_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsingInput"></a>

```python
complex_data_type_reference_parsing_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `default_search_handling_strict_input`<sup>Optional</sup> <a name="default_search_handling_strict_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrictInput"></a>

```python
default_search_handling_strict_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_referential_integrity_input`<sup>Optional</sup> <a name="disable_referential_integrity_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrityInput"></a>

```python
disable_referential_integrity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_resource_versioning_input`<sup>Optional</sup> <a name="disable_resource_versioning_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioningInput"></a>

```python
disable_resource_versioning_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_history_import_input`<sup>Optional</sup> <a name="enable_history_import_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImportInput"></a>

```python
enable_history_import_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_history_modifications_input`<sup>Optional</sup> <a name="enable_history_modifications_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModificationsInput"></a>

```python
enable_history_modifications_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_update_create_input`<sup>Optional</sup> <a name="enable_update_create_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreateInput"></a>

```python
enable_update_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_config_input`<sup>Optional</sup> <a name="notification_config_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigInput"></a>

```python
notification_config_input: GoogleHealthcareFhirStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---

##### `notification_configs_input`<sup>Optional</sup> <a name="notification_configs_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigsInput"></a>

```python
notification_configs_input: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]

---

##### `stream_configs_input`<sup>Optional</sup> <a name="stream_configs_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigsInput"></a>

```python
stream_configs_input: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreStreamConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleHealthcareFhirStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `complex_data_type_reference_parsing`<sup>Required</sup> <a name="complex_data_type_reference_parsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsing"></a>

```python
complex_data_type_reference_parsing: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `default_search_handling_strict`<sup>Required</sup> <a name="default_search_handling_strict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrict"></a>

```python
default_search_handling_strict: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_referential_integrity`<sup>Required</sup> <a name="disable_referential_integrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrity"></a>

```python
disable_referential_integrity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_resource_versioning`<sup>Required</sup> <a name="disable_resource_versioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioning"></a>

```python
disable_resource_versioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_history_import`<sup>Required</sup> <a name="enable_history_import" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImport"></a>

```python
enable_history_import: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_history_modifications`<sup>Required</sup> <a name="enable_history_modifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModifications"></a>

```python
enable_history_modifications: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_update_create`<sup>Required</sup> <a name="enable_update_create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreate"></a>

```python
enable_update_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareFhirStoreConfig <a name="GoogleHealthcareFhirStoreConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  complex_data_type_reference_parsing: str = None,
  default_search_handling_strict: typing.Union[bool, IResolvable] = None,
  disable_referential_integrity: typing.Union[bool, IResolvable] = None,
  disable_resource_versioning: typing.Union[bool, IResolvable] = None,
  enable_history_import: typing.Union[bool, IResolvable] = None,
  enable_history_modifications: typing.Union[bool, IResolvable] = None,
  enable_update_create: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  notification_config: GoogleHealthcareFhirStoreNotificationConfig = None,
  notification_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreNotificationConfigs]] = None,
  stream_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreStreamConfigs]] = None,
  timeouts: GoogleHealthcareFhirStoreTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.name">name</a></code> | <code>str</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing">complex_data_type_reference_parsing</a></code> | <code>str</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.defaultSearchHandlingStrict">default_search_handling_strict</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableReferentialIntegrity">disable_referential_integrity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableResourceVersioning">disable_resource_versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryImport">enable_history_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryModifications">enable_history_modifications</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableUpdateCreate">enable_update_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfigs">notification_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]</code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.streamConfigs">stream_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]</code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.version">version</a></code> | <code>str</code> | The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#dataset GoogleHealthcareFhirStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#name GoogleHealthcareFhirStore#name}

---

##### `complex_data_type_reference_parsing`<sup>Optional</sup> <a name="complex_data_type_reference_parsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing"></a>

```python
complex_data_type_reference_parsing: str
```

- *Type:* str

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#complex_data_type_reference_parsing GoogleHealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `default_search_handling_strict`<sup>Optional</sup> <a name="default_search_handling_strict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.defaultSearchHandlingStrict"></a>

```python
default_search_handling_strict: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#default_search_handling_strict GoogleHealthcareFhirStore#default_search_handling_strict}

---

##### `disable_referential_integrity`<sup>Optional</sup> <a name="disable_referential_integrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableReferentialIntegrity"></a>

```python
disable_referential_integrity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#disable_referential_integrity GoogleHealthcareFhirStore#disable_referential_integrity}

---

##### `disable_resource_versioning`<sup>Optional</sup> <a name="disable_resource_versioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableResourceVersioning"></a>

```python
disable_resource_versioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#disable_resource_versioning GoogleHealthcareFhirStore#disable_resource_versioning}

---

##### `enable_history_import`<sup>Optional</sup> <a name="enable_history_import" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryImport"></a>

```python
enable_history_import: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#enable_history_import GoogleHealthcareFhirStore#enable_history_import}

---

##### `enable_history_modifications`<sup>Optional</sup> <a name="enable_history_modifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryModifications"></a>

```python
enable_history_modifications: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store.

If set to false, using history bundles fails with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#enable_history_modifications GoogleHealthcareFhirStore#enable_history_modifications}

---

##### `enable_update_create`<sup>Optional</sup> <a name="enable_update_create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableUpdateCreate"></a>

```python
enable_update_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#enable_update_create GoogleHealthcareFhirStore#enable_update_create}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#labels GoogleHealthcareFhirStore#labels}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfig"></a>

```python
notification_config: GoogleHealthcareFhirStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#notification_config GoogleHealthcareFhirStore#notification_config}

---

##### `notification_configs`<sup>Optional</sup> <a name="notification_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfigs"></a>

```python
notification_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#notification_configs GoogleHealthcareFhirStore#notification_configs}

---

##### `stream_configs`<sup>Optional</sup> <a name="stream_configs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.streamConfigs"></a>

```python
stream_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreStreamConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#stream_configs GoogleHealthcareFhirStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.timeouts"></a>

```python
timeouts: GoogleHealthcareFhirStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#timeouts GoogleHealthcareFhirStore#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#version GoogleHealthcareFhirStore#version}

---

### GoogleHealthcareFhirStoreNotificationConfig <a name="GoogleHealthcareFhirStoreNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig(
  pubsub_topic: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

### GoogleHealthcareFhirStoreNotificationConfigs <a name="GoogleHealthcareFhirStoreNotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs(
  pubsub_topic: str,
  send_full_resource: typing.Union[bool, IResolvable] = None,
  send_previous_resource_on_delete: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendFullResource">send_full_resource</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete">send_previous_resource_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. |

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

##### `send_full_resource`<sup>Optional</sup> <a name="send_full_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendFullResource"></a>

```python
send_full_resource: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.

Note that setting this to true does not guarantee that all resources will be sent in the format of
full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
it needs to fetch the full resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#send_full_resource GoogleHealthcareFhirStore#send_full_resource}

---

##### `send_previous_resource_on_delete`<sup>Optional</sup> <a name="send_previous_resource_on_delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete"></a>

```python
send_previous_resource_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource.

Note that setting this to
true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#send_previous_resource_on_delete GoogleHealthcareFhirStore#send_previous_resource_on_delete}

---

### GoogleHealthcareFhirStoreStreamConfigs <a name="GoogleHealthcareFhirStoreStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs(
  bigquery_destination: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination,
  resource_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.bigqueryDestination">bigquery_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Supply a FHIR resource type (such as "Patient" or "Observation"). |

---

##### `bigquery_destination`<sup>Required</sup> <a name="bigquery_destination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.bigqueryDestination"></a>

```python
bigquery_destination: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#bigquery_destination GoogleHealthcareFhirStore#bigquery_destination}

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Supply a FHIR resource type (such as "Patient" or "Observation").

See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#resource_types GoogleHealthcareFhirStore#resource_types}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination(
  dataset_uri: str,
  schema_config: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri">dataset_uri</a></code> | <code>str</code> | BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig">schema_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | schema_config block. |

---

##### `dataset_uri`<sup>Required</sup> <a name="dataset_uri" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri"></a>

```python
dataset_uri: str
```

- *Type:* str

BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#dataset_uri GoogleHealthcareFhirStore#dataset_uri}

---

##### `schema_config`<sup>Required</sup> <a name="schema_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig"></a>

```python
schema_config: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

schema_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#schema_config GoogleHealthcareFhirStore#schema_config}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig(
  recursive_structure_depth: typing.Union[int, float],
  last_updated_partition_config: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig = None,
  schema_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth">recursive_structure_depth</a></code> | <code>typing.Union[int, float]</code> | The depth for all recursive structures in the output analytics schema. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig">last_updated_partition_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | last_updated_partition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType">schema_type</a></code> | <code>str</code> | Specifies the output schema type. |

---

##### `recursive_structure_depth`<sup>Required</sup> <a name="recursive_structure_depth" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth"></a>

```python
recursive_structure_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The depth for all recursive structures in the output analytics schema.

For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#recursive_structure_depth GoogleHealthcareFhirStore#recursive_structure_depth}

---

##### `last_updated_partition_config`<sup>Optional</sup> <a name="last_updated_partition_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig"></a>

```python
last_updated_partition_config: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

last_updated_partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#last_updated_partition_config GoogleHealthcareFhirStore#last_updated_partition_config}

---

##### `schema_type`<sup>Optional</sup> <a name="schema_type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

Specifies the output schema type.

* ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
* ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
* LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#schema_type GoogleHealthcareFhirStore#schema_type}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig(
  type: str,
  expiration_ms: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type">type</a></code> | <code>str</code> | Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs">expiration_ms</a></code> | <code>str</code> | Number of milliseconds for which to keep the storage for a partition. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#type GoogleHealthcareFhirStore#type}

---

##### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs"></a>

```python
expiration_ms: str
```

- *Type:* str

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#expiration_ms GoogleHealthcareFhirStore#expiration_ms}

---

### GoogleHealthcareFhirStoreTimeouts <a name="GoogleHealthcareFhirStoreTimeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareFhirStoreNotificationConfigOutputReference <a name="GoogleHealthcareFhirStoreNotificationConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcareFhirStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---


### GoogleHealthcareFhirStoreNotificationConfigsList <a name="GoogleHealthcareFhirStoreNotificationConfigsList" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleHealthcareFhirStoreNotificationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreNotificationConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]]

---


### GoogleHealthcareFhirStoreNotificationConfigsOutputReference <a name="GoogleHealthcareFhirStoreNotificationConfigsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource">reset_send_full_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete">reset_send_previous_resource_on_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_send_full_resource` <a name="reset_send_full_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource"></a>

```python
def reset_send_full_resource() -> None
```

##### `reset_send_previous_resource_on_delete` <a name="reset_send_previous_resource_on_delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete"></a>

```python
def reset_send_previous_resource_on_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput">send_full_resource_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput">send_previous_resource_on_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource">send_full_resource</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete">send_previous_resource_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `send_full_resource_input`<sup>Optional</sup> <a name="send_full_resource_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput"></a>

```python
send_full_resource_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_previous_resource_on_delete_input`<sup>Optional</sup> <a name="send_previous_resource_on_delete_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput"></a>

```python
send_previous_resource_on_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `send_full_resource`<sup>Required</sup> <a name="send_full_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource"></a>

```python
send_full_resource: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `send_previous_resource_on_delete`<sup>Required</sup> <a name="send_previous_resource_on_delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete"></a>

```python
send_previous_resource_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleHealthcareFhirStoreNotificationConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>]

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig">put_schema_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_config` <a name="put_schema_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig"></a>

```python
def put_schema_config(
  recursive_structure_depth: typing.Union[int, float],
  last_updated_partition_config: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig = None,
  schema_type: str = None
) -> None
```

###### `recursive_structure_depth`<sup>Required</sup> <a name="recursive_structure_depth" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.recursiveStructureDepth"></a>

- *Type:* typing.Union[int, float]

The depth for all recursive structures in the output analytics schema.

For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#recursive_structure_depth GoogleHealthcareFhirStore#recursive_structure_depth}

---

###### `last_updated_partition_config`<sup>Optional</sup> <a name="last_updated_partition_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.lastUpdatedPartitionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

last_updated_partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#last_updated_partition_config GoogleHealthcareFhirStore#last_updated_partition_config}

---

###### `schema_type`<sup>Optional</sup> <a name="schema_type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.schemaType"></a>

- *Type:* str

Specifies the output schema type.

* ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
* ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
* LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#schema_type GoogleHealthcareFhirStore#schema_type}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig">schema_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput">dataset_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput">schema_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri">dataset_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_config`<sup>Required</sup> <a name="schema_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig"></a>

```python
schema_config: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a>

---

##### `dataset_uri_input`<sup>Optional</sup> <a name="dataset_uri_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput"></a>

```python
dataset_uri_input: str
```

- *Type:* str

---

##### `schema_config_input`<sup>Optional</sup> <a name="schema_config_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput"></a>

```python
schema_config_input: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---

##### `dataset_uri`<sup>Required</sup> <a name="dataset_uri" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri"></a>

```python
dataset_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs">reset_expiration_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_ms` <a name="reset_expiration_ms" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs"></a>

```python
def reset_expiration_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput">expiration_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs">expiration_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_ms_input`<sup>Optional</sup> <a name="expiration_ms_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput"></a>

```python
expiration_ms_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expiration_ms`<sup>Required</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs"></a>

```python
expiration_ms: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig">put_last_updated_partition_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig">reset_last_updated_partition_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType">reset_schema_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_last_updated_partition_config` <a name="put_last_updated_partition_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig"></a>

```python
def put_last_updated_partition_config(
  type: str,
  expiration_ms: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig.parameter.type"></a>

- *Type:* str

Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#type GoogleHealthcareFhirStore#type}

---

###### `expiration_ms`<sup>Optional</sup> <a name="expiration_ms" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig.parameter.expirationMs"></a>

- *Type:* str

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#expiration_ms GoogleHealthcareFhirStore#expiration_ms}

---

##### `reset_last_updated_partition_config` <a name="reset_last_updated_partition_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig"></a>

```python
def reset_last_updated_partition_config() -> None
```

##### `reset_schema_type` <a name="reset_schema_type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType"></a>

```python
def reset_schema_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig">last_updated_partition_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput">last_updated_partition_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput">recursive_structure_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput">schema_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth">recursive_structure_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType">schema_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_updated_partition_config`<sup>Required</sup> <a name="last_updated_partition_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig"></a>

```python
last_updated_partition_config: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a>

---

##### `last_updated_partition_config_input`<sup>Optional</sup> <a name="last_updated_partition_config_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput"></a>

```python
last_updated_partition_config_input: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `recursive_structure_depth_input`<sup>Optional</sup> <a name="recursive_structure_depth_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput"></a>

```python
recursive_structure_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_type_input`<sup>Optional</sup> <a name="schema_type_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput"></a>

```python
schema_type_input: str
```

- *Type:* str

---

##### `recursive_structure_depth`<sup>Required</sup> <a name="recursive_structure_depth" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth"></a>

```python
recursive_structure_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


### GoogleHealthcareFhirStoreStreamConfigsList <a name="GoogleHealthcareFhirStoreStreamConfigsList" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleHealthcareFhirStoreStreamConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleHealthcareFhirStoreStreamConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]]

---


### GoogleHealthcareFhirStoreStreamConfigsOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination">put_bigquery_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes">reset_resource_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_destination` <a name="put_bigquery_destination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```python
def put_bigquery_destination(
  dataset_uri: str,
  schema_config: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig
) -> None
```

###### `dataset_uri`<sup>Required</sup> <a name="dataset_uri" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.datasetUri"></a>

- *Type:* str

BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#dataset_uri GoogleHealthcareFhirStore#dataset_uri}

---

###### `schema_config`<sup>Required</sup> <a name="schema_config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.schemaConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

schema_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_healthcare_fhir_store#schema_config GoogleHealthcareFhirStore#schema_config}

---

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination">bigquery_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">bigquery_destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_destination`<sup>Required</sup> <a name="bigquery_destination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```python
bigquery_destination: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `bigquery_destination_input`<sup>Optional</sup> <a name="bigquery_destination_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```python
bigquery_destination_input: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleHealthcareFhirStoreStreamConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>]

---


### GoogleHealthcareFhirStoreTimeoutsOutputReference <a name="GoogleHealthcareFhirStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_fhir_store

googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleHealthcareFhirStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>]

---



