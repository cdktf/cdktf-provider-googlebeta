# `googleCertificateManagerCertificateMapEntry` Submodule <a name="`googleCertificateManagerCertificateMapEntry` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerCertificateMapEntry <a name="GoogleCertificateManagerCertificateMapEntry" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry google_certificate_manager_certificate_map_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_certificate_map_entry

googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificates: typing.List[str],
  map: str,
  name: str,
  description: str = None,
  hostname: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  matcher: str = None,
  project: str = None,
  timeouts: GoogleCertificateManagerCertificateMapEntryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.certificates">certificates</a></code> | <code>typing.List[str]</code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.map">map</a></code> | <code>str</code> | A map entry that is inputted into the cetrificate map. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#id GoogleCertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.matcher">matcher</a></code> | <code>str</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#project GoogleCertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.certificates"></a>

- *Type:* typing.List[str]

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/* /locations/* /certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#certificates GoogleCertificateManagerCertificateMapEntry#certificates}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.map"></a>

- *Type:* str

A map entry that is inputted into the cetrificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#map GoogleCertificateManagerCertificateMapEntry#map}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the Certificate Map Entry.

Certificate Map Entry
names must be unique globally and match pattern
'projects/* /locations/* /certificateMaps/* /certificateMapEntries/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#name GoogleCertificateManagerCertificateMapEntry#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#description GoogleCertificateManagerCertificateMapEntry#description}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.hostname"></a>

- *Type:* str

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#hostname GoogleCertificateManagerCertificateMapEntry#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#id GoogleCertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#labels GoogleCertificateManagerCertificateMapEntry#labels}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.matcher"></a>

- *Type:* str

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#matcher GoogleCertificateManagerCertificateMapEntry#matcher}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#project GoogleCertificateManagerCertificateMapEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#timeouts GoogleCertificateManagerCertificateMapEntry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetMatcher">reset_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#create GoogleCertificateManagerCertificateMapEntry#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#delete GoogleCertificateManagerCertificateMapEntry#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#update GoogleCertificateManagerCertificateMapEntry#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_matcher` <a name="reset_matcher" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetMatcher"></a>

```python
def reset_matcher() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerCertificateMapEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_certificate_map_entry

googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_certificate_map_entry

googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_certificate_map_entry

googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_certificate_map_entry

googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCertificateManagerCertificateMapEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCertificateManagerCertificateMapEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCertificateManagerCertificateMapEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerCertificateMapEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference">GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.certificatesInput">certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.mapInput">map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.matcherInput">matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.certificates">certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.map">map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.matcher">matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.timeouts"></a>

```python
timeouts: GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference">GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `certificates_input`<sup>Optional</sup> <a name="certificates_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.certificatesInput"></a>

```python
certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `map_input`<sup>Optional</sup> <a name="map_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.mapInput"></a>

```python
map_input: str
```

- *Type:* str

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.matcherInput"></a>

```python
matcher_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCertificateManagerCertificateMapEntryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a>]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.certificates"></a>

```python
certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.map"></a>

```python
map: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerCertificateMapEntryConfig <a name="GoogleCertificateManagerCertificateMapEntryConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_certificate_map_entry

googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificates: typing.List[str],
  map: str,
  name: str,
  description: str = None,
  hostname: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  matcher: str = None,
  project: str = None,
  timeouts: GoogleCertificateManagerCertificateMapEntryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.certificates">certificates</a></code> | <code>typing.List[str]</code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.map">map</a></code> | <code>str</code> | A map entry that is inputted into the cetrificate map. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.hostname">hostname</a></code> | <code>str</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#id GoogleCertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.matcher">matcher</a></code> | <code>str</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#project GoogleCertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.certificates"></a>

```python
certificates: typing.List[str]
```

- *Type:* typing.List[str]

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/* /locations/* /certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#certificates GoogleCertificateManagerCertificateMapEntry#certificates}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.map"></a>

```python
map: str
```

- *Type:* str

A map entry that is inputted into the cetrificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#map GoogleCertificateManagerCertificateMapEntry#map}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the Certificate Map Entry.

Certificate Map Entry
names must be unique globally and match pattern
'projects/* /locations/* /certificateMaps/* /certificateMapEntries/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#name GoogleCertificateManagerCertificateMapEntry#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#description GoogleCertificateManagerCertificateMapEntry#description}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#hostname GoogleCertificateManagerCertificateMapEntry#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#id GoogleCertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#labels GoogleCertificateManagerCertificateMapEntry#labels}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#matcher GoogleCertificateManagerCertificateMapEntry#matcher}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#project GoogleCertificateManagerCertificateMapEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.timeouts"></a>

```python
timeouts: GoogleCertificateManagerCertificateMapEntryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#timeouts GoogleCertificateManagerCertificateMapEntry#timeouts}

---

### GoogleCertificateManagerCertificateMapEntryTimeouts <a name="GoogleCertificateManagerCertificateMapEntryTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_certificate_map_entry

googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#create GoogleCertificateManagerCertificateMapEntry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#delete GoogleCertificateManagerCertificateMapEntry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#update GoogleCertificateManagerCertificateMapEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#create GoogleCertificateManagerCertificateMapEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#delete GoogleCertificateManagerCertificateMapEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate_map_entry#update GoogleCertificateManagerCertificateMapEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference <a name="GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_certificate_map_entry

googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCertificateManagerCertificateMapEntryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a>]

---



