# `googleDnsManagedZone` Submodule <a name="`googleDnsManagedZone` Submodule" id="@cdktf/provider-google-beta.googleDnsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsManagedZone <a name="GoogleDnsManagedZone" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone google_dns_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZone(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_name: str,
  name: str,
  cloud_logging_config: GoogleDnsManagedZoneCloudLoggingConfig = None,
  description: str = None,
  dnssec_config: GoogleDnsManagedZoneDnssecConfig = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  forwarding_config: GoogleDnsManagedZoneForwardingConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  peering_config: GoogleDnsManagedZonePeeringConfig = None,
  private_visibility_config: GoogleDnsManagedZonePrivateVisibilityConfig = None,
  project: str = None,
  reverse_lookup: typing.Union[bool, IResolvable] = None,
  service_directory_config: GoogleDnsManagedZoneServiceDirectoryConfig = None,
  timeouts: GoogleDnsManagedZoneTimeouts = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.dnsName">dns_name</a></code> | <code>str</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.name">name</a></code> | <code>str</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.cloudLoggingConfig">cloud_logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.description">description</a></code> | <code>str</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.dnssecConfig">dnssec_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.forwardingConfig">forwarding_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.peeringConfig">peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.privateVisibilityConfig">private_visibility_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.reverseLookup">reverse_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if this is a managed reverse lookup zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.dnsName"></a>

- *Type:* str

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#dns_name GoogleDnsManagedZone#dns_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.name"></a>

- *Type:* str

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#name GoogleDnsManagedZone#name}

---

##### `cloud_logging_config`<sup>Optional</sup> <a name="cloud_logging_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.cloudLoggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#cloud_logging_config GoogleDnsManagedZone#cloud_logging_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.description"></a>

- *Type:* str

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#description GoogleDnsManagedZone#description}

---

##### `dnssec_config`<sup>Optional</sup> <a name="dnssec_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.dnssecConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#dnssec_config GoogleDnsManagedZone#dnssec_config}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#force_destroy GoogleDnsManagedZone#force_destroy}

---

##### `forwarding_config`<sup>Optional</sup> <a name="forwarding_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.forwardingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#forwarding_config GoogleDnsManagedZone#forwarding_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this ManagedZone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#labels GoogleDnsManagedZone#labels}

---

##### `peering_config`<sup>Optional</sup> <a name="peering_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.peeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#peering_config GoogleDnsManagedZone#peering_config}

---

##### `private_visibility_config`<sup>Optional</sup> <a name="private_visibility_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.privateVisibilityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#private_visibility_config GoogleDnsManagedZone#private_visibility_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}.

---

##### `reverse_lookup`<sup>Optional</sup> <a name="reverse_lookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.reverseLookup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if this is a managed reverse lookup zone.

If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under 'private_visibility_config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#reverse_lookup GoogleDnsManagedZone#reverse_lookup}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#service_directory_config GoogleDnsManagedZone#service_directory_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#timeouts GoogleDnsManagedZone#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.visibility"></a>

- *Type:* str

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#visibility GoogleDnsManagedZone#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig">put_cloud_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig">put_dnssec_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig">put_forwarding_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig">put_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig">put_private_visibility_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetCloudLoggingConfig">reset_cloud_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDnssecConfig">reset_dnssec_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForwardingConfig">reset_forwarding_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPeeringConfig">reset_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPrivateVisibilityConfig">reset_private_visibility_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetReverseLookup">reset_reverse_lookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cloud_logging_config` <a name="put_cloud_logging_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig"></a>

```python
def put_cloud_logging_config(
  enable_logging: typing.Union[bool, IResolvable]
) -> None
```

###### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#enable_logging GoogleDnsManagedZone#enable_logging}

---

##### `put_dnssec_config` <a name="put_dnssec_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig"></a>

```python
def put_dnssec_config(
  default_key_specs: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs]] = None,
  kind: str = None,
  non_existence: str = None,
  state: str = None
) -> None
```

###### `default_key_specs`<sup>Optional</sup> <a name="default_key_specs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig.parameter.defaultKeySpecs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

default_key_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#default_key_specs GoogleDnsManagedZone#default_key_specs}

---

###### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig.parameter.kind"></a>

- *Type:* str

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}

---

###### `non_existence`<sup>Optional</sup> <a name="non_existence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig.parameter.nonExistence"></a>

- *Type:* str

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#non_existence GoogleDnsManagedZone#non_existence}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig.parameter.state"></a>

- *Type:* str

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#state GoogleDnsManagedZone#state}

---

##### `put_forwarding_config` <a name="put_forwarding_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig"></a>

```python
def put_forwarding_config(
  target_name_servers: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneForwardingConfigTargetNameServers]]
) -> None
```

###### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig.parameter.targetNameServers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#target_name_servers GoogleDnsManagedZone#target_name_servers}

---

##### `put_peering_config` <a name="put_peering_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig"></a>

```python
def put_peering_config(
  target_network: GoogleDnsManagedZonePeeringConfigTargetNetwork
) -> None
```

###### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig.parameter.targetNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#target_network GoogleDnsManagedZone#target_network}

---

##### `put_private_visibility_config` <a name="put_private_visibility_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig"></a>

```python
def put_private_visibility_config(
  gke_clusters: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters]] = None,
  networks: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigNetworks]] = None
) -> None
```

###### `gke_clusters`<sup>Optional</sup> <a name="gke_clusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig.parameter.gkeClusters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#gke_clusters GoogleDnsManagedZone#gke_clusters}

---

###### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#networks GoogleDnsManagedZone#networks}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  namespace: GoogleDnsManagedZoneServiceDirectoryConfigNamespace
) -> None
```

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig.parameter.namespace"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#namespace GoogleDnsManagedZone#namespace}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#create GoogleDnsManagedZone#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#update GoogleDnsManagedZone#update}.

---

##### `reset_cloud_logging_config` <a name="reset_cloud_logging_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetCloudLoggingConfig"></a>

```python
def reset_cloud_logging_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dnssec_config` <a name="reset_dnssec_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDnssecConfig"></a>

```python
def reset_dnssec_config() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_forwarding_config` <a name="reset_forwarding_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForwardingConfig"></a>

```python
def reset_forwarding_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_peering_config` <a name="reset_peering_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPeeringConfig"></a>

```python
def reset_peering_config() -> None
```

##### `reset_private_visibility_config` <a name="reset_private_visibility_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPrivateVisibilityConfig"></a>

```python
def reset_private_visibility_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_reverse_lookup` <a name="reset_reverse_lookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetReverseLookup"></a>

```python
def reset_reverse_lookup() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDnsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDnsManagedZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDnsManagedZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDnsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfig">cloud_logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference">GoogleDnsManagedZoneCloudLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfig">dnssec_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference">GoogleDnsManagedZoneDnssecConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfig">forwarding_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference">GoogleDnsManagedZoneForwardingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.managedZoneId">managed_zone_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfig">peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference">GoogleDnsManagedZonePeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfig">private_visibility_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference">GoogleDnsManagedZonePrivateVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference">GoogleDnsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfigInput">cloud_logging_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfigInput">dnssec_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfigInput">forwarding_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfigInput">peering_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfigInput">private_visibility_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookupInput">reverse_lookup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookup">reverse_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_logging_config`<sup>Required</sup> <a name="cloud_logging_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfig"></a>

```python
cloud_logging_config: GoogleDnsManagedZoneCloudLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference">GoogleDnsManagedZoneCloudLoggingConfigOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `dnssec_config`<sup>Required</sup> <a name="dnssec_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfig"></a>

```python
dnssec_config: GoogleDnsManagedZoneDnssecConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference">GoogleDnsManagedZoneDnssecConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `forwarding_config`<sup>Required</sup> <a name="forwarding_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfig"></a>

```python
forwarding_config: GoogleDnsManagedZoneForwardingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference">GoogleDnsManagedZoneForwardingConfigOutputReference</a>

---

##### `managed_zone_id`<sup>Required</sup> <a name="managed_zone_id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.managedZoneId"></a>

```python
managed_zone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peering_config`<sup>Required</sup> <a name="peering_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfig"></a>

```python
peering_config: GoogleDnsManagedZonePeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference">GoogleDnsManagedZonePeeringConfigOutputReference</a>

---

##### `private_visibility_config`<sup>Required</sup> <a name="private_visibility_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfig"></a>

```python
private_visibility_config: GoogleDnsManagedZonePrivateVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference">GoogleDnsManagedZonePrivateVisibilityConfigOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleDnsManagedZoneServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeouts"></a>

```python
timeouts: GoogleDnsManagedZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference">GoogleDnsManagedZoneTimeoutsOutputReference</a>

---

##### `cloud_logging_config_input`<sup>Optional</sup> <a name="cloud_logging_config_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfigInput"></a>

```python
cloud_logging_config_input: GoogleDnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `dnssec_config_input`<sup>Optional</sup> <a name="dnssec_config_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfigInput"></a>

```python
dnssec_config_input: GoogleDnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forwarding_config_input`<sup>Optional</sup> <a name="forwarding_config_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfigInput"></a>

```python
forwarding_config_input: GoogleDnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peering_config_input`<sup>Optional</sup> <a name="peering_config_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfigInput"></a>

```python
peering_config_input: GoogleDnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

---

##### `private_visibility_config_input`<sup>Optional</sup> <a name="private_visibility_config_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfigInput"></a>

```python
private_visibility_config_input: GoogleDnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reverse_lookup_input`<sup>Optional</sup> <a name="reverse_lookup_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookupInput"></a>

```python
reverse_lookup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: GoogleDnsManagedZoneServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDnsManagedZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>]

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `reverse_lookup`<sup>Required</sup> <a name="reverse_lookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookup"></a>

```python
reverse_lookup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsManagedZoneCloudLoggingConfig <a name="GoogleDnsManagedZoneCloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig(
  enable_logging: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, enable query logging for this ManagedZone. False by default, making logging opt-in. |

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#enable_logging GoogleDnsManagedZone#enable_logging}

---

### GoogleDnsManagedZoneConfig <a name="GoogleDnsManagedZoneConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_name: str,
  name: str,
  cloud_logging_config: GoogleDnsManagedZoneCloudLoggingConfig = None,
  description: str = None,
  dnssec_config: GoogleDnsManagedZoneDnssecConfig = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  forwarding_config: GoogleDnsManagedZoneForwardingConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  peering_config: GoogleDnsManagedZonePeeringConfig = None,
  private_visibility_config: GoogleDnsManagedZonePrivateVisibilityConfig = None,
  project: str = None,
  reverse_lookup: typing.Union[bool, IResolvable] = None,
  service_directory_config: GoogleDnsManagedZoneServiceDirectoryConfig = None,
  timeouts: GoogleDnsManagedZoneTimeouts = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnsName">dns_name</a></code> | <code>str</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.name">name</a></code> | <code>str</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.cloudLoggingConfig">cloud_logging_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.description">description</a></code> | <code>str</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnssecConfig">dnssec_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forwardingConfig">forwarding_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.peeringConfig">peering_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.privateVisibilityConfig">private_visibility_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.reverseLookup">reverse_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if this is a managed reverse lookup zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.visibility">visibility</a></code> | <code>str</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#dns_name GoogleDnsManagedZone#dns_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#name GoogleDnsManagedZone#name}

---

##### `cloud_logging_config`<sup>Optional</sup> <a name="cloud_logging_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.cloudLoggingConfig"></a>

```python
cloud_logging_config: GoogleDnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#cloud_logging_config GoogleDnsManagedZone#cloud_logging_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#description GoogleDnsManagedZone#description}

---

##### `dnssec_config`<sup>Optional</sup> <a name="dnssec_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnssecConfig"></a>

```python
dnssec_config: GoogleDnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#dnssec_config GoogleDnsManagedZone#dnssec_config}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#force_destroy GoogleDnsManagedZone#force_destroy}

---

##### `forwarding_config`<sup>Optional</sup> <a name="forwarding_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forwardingConfig"></a>

```python
forwarding_config: GoogleDnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#forwarding_config GoogleDnsManagedZone#forwarding_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this ManagedZone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#labels GoogleDnsManagedZone#labels}

---

##### `peering_config`<sup>Optional</sup> <a name="peering_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.peeringConfig"></a>

```python
peering_config: GoogleDnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#peering_config GoogleDnsManagedZone#peering_config}

---

##### `private_visibility_config`<sup>Optional</sup> <a name="private_visibility_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.privateVisibilityConfig"></a>

```python
private_visibility_config: GoogleDnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#private_visibility_config GoogleDnsManagedZone#private_visibility_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}.

---

##### `reverse_lookup`<sup>Optional</sup> <a name="reverse_lookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.reverseLookup"></a>

```python
reverse_lookup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if this is a managed reverse lookup zone.

If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under 'private_visibility_config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#reverse_lookup GoogleDnsManagedZone#reverse_lookup}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleDnsManagedZoneServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#service_directory_config GoogleDnsManagedZone#service_directory_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.timeouts"></a>

```python
timeouts: GoogleDnsManagedZoneTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#timeouts GoogleDnsManagedZone#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#visibility GoogleDnsManagedZone#visibility}

---

### GoogleDnsManagedZoneDnssecConfig <a name="GoogleDnsManagedZoneDnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig(
  default_key_specs: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs]] = None,
  kind: str = None,
  non_existence: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.defaultKeySpecs">default_key_specs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]</code> | default_key_specs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.kind">kind</a></code> | <code>str</code> | Identifies what kind of resource this is. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.nonExistence">non_existence</a></code> | <code>str</code> | Specifies the mechanism used to provide authenticated denial-of-existence responses. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.state">state</a></code> | <code>str</code> | Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]. |

---

##### `default_key_specs`<sup>Optional</sup> <a name="default_key_specs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.defaultKeySpecs"></a>

```python
default_key_specs: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

default_key_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#default_key_specs GoogleDnsManagedZone#default_key_specs}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}

---

##### `non_existence`<sup>Optional</sup> <a name="non_existence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.nonExistence"></a>

```python
non_existence: str
```

- *Type:* str

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#non_existence GoogleDnsManagedZone#non_existence}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#state GoogleDnsManagedZone#state}

---

### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs(
  algorithm: str = None,
  key_length: typing.Union[int, float] = None,
  key_type: str = None,
  kind: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm">algorithm</a></code> | <code>str</code> | String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength">key_length</a></code> | <code>typing.Union[int, float]</code> | Length of the keys in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType">key_type</a></code> | <code>str</code> | Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind">kind</a></code> | <code>str</code> | Identifies what kind of resource this is. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#algorithm GoogleDnsManagedZone#algorithm}

---

##### `key_length`<sup>Optional</sup> <a name="key_length" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength"></a>

```python
key_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length of the keys in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#key_length GoogleDnsManagedZone#key_length}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK).

Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#key_type GoogleDnsManagedZone#key_type}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind"></a>

```python
kind: str
```

- *Type:* str

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}

---

### GoogleDnsManagedZoneForwardingConfig <a name="GoogleDnsManagedZoneForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig(
  target_name_servers: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneForwardingConfigTargetNameServers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.property.targetNameServers">target_name_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]]</code> | target_name_servers block. |

---

##### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.property.targetNameServers"></a>

```python
target_name_servers: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneForwardingConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#target_name_servers GoogleDnsManagedZone#target_name_servers}

---

### GoogleDnsManagedZoneForwardingConfigTargetNameServers <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers(
  ipv4_address: str,
  forwarding_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | IPv4 address of a target name server. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath">forwarding_path</a></code> | <code>str</code> | Forwarding path for this TargetNameServer. |

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

IPv4 address of a target name server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#ipv4_address GoogleDnsManagedZone#ipv4_address}

---

##### `forwarding_path`<sup>Optional</sup> <a name="forwarding_path" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath"></a>

```python
forwarding_path: str
```

- *Type:* str

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#forwarding_path GoogleDnsManagedZone#forwarding_path}

---

### GoogleDnsManagedZonePeeringConfig <a name="GoogleDnsManagedZonePeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig(
  target_network: GoogleDnsManagedZonePeeringConfigTargetNetwork
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.property.targetNetwork">target_network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | target_network block. |

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.property.targetNetwork"></a>

```python
target_network: GoogleDnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#target_network GoogleDnsManagedZone#target_network}

---

### GoogleDnsManagedZonePeeringConfigTargetNetwork <a name="GoogleDnsManagedZonePeeringConfigTargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork(
  network_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.property.networkUrl">network_url</a></code> | <code>str</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}

---

### GoogleDnsManagedZonePrivateVisibilityConfig <a name="GoogleDnsManagedZonePrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig(
  gke_clusters: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters]] = None,
  networks: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigNetworks]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.gkeClusters">gke_clusters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]</code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]]</code> | networks block. |

---

##### `gke_clusters`<sup>Optional</sup> <a name="gke_clusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.gkeClusters"></a>

```python
gke_clusters: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#gke_clusters GoogleDnsManagedZone#gke_clusters}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#networks GoogleDnsManagedZone#networks}

---

### GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters(
  gke_cluster_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName">gke_cluster_name</a></code> | <code>str</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `gke_cluster_name`<sup>Required</sup> <a name="gke_cluster_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName"></a>

```python
gke_cluster_name: str
```

- *Type:* str

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#gke_cluster_name GoogleDnsManagedZone#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDnsManagedZonePrivateVisibilityConfigNetworks <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks(
  network_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl">network_url</a></code> | <code>str</code> | The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}

---

### GoogleDnsManagedZoneServiceDirectoryConfig <a name="GoogleDnsManagedZoneServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig(
  namespace: GoogleDnsManagedZoneServiceDirectoryConfigNamespace
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | namespace block. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.property.namespace"></a>

```python
namespace: GoogleDnsManagedZoneServiceDirectoryConfigNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#namespace GoogleDnsManagedZone#namespace}

---

### GoogleDnsManagedZoneServiceDirectoryConfigNamespace <a name="GoogleDnsManagedZoneServiceDirectoryConfigNamespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace(
  namespace_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.property.namespaceUrl">namespace_url</a></code> | <code>str</code> | The fully qualified or partial URL of the service directory namespace that should be associated with the zone. |

---

##### `namespace_url`<sup>Required</sup> <a name="namespace_url" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.property.namespaceUrl"></a>

```python
namespace_url: str
```

- *Type:* str

The fully qualified or partial URL of the service directory namespace that should be associated with the zone.

This should be formatted like
'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
Ignored for 'public' visibility zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#namespace_url GoogleDnsManagedZone#namespace_url}

---

### GoogleDnsManagedZoneTimeouts <a name="GoogleDnsManagedZoneTimeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#create GoogleDnsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#update GoogleDnsManagedZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#create GoogleDnsManagedZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#update GoogleDnsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsManagedZoneCloudLoggingConfigOutputReference <a name="GoogleDnsManagedZoneCloudLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsManagedZoneCloudLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

---


### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

---


### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength">reset_key_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind">reset_kind</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_key_length` <a name="reset_key_length" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength"></a>

```python
def reset_key_length() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput">key_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength">key_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `key_length_input`<sup>Optional</sup> <a name="key_length_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput"></a>

```python
key_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `key_length`<sup>Required</sup> <a name="key_length" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength"></a>

```python
key_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]

---


### GoogleDnsManagedZoneDnssecConfigOutputReference <a name="GoogleDnsManagedZoneDnssecConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs">put_default_key_specs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs">reset_default_key_specs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetNonExistence">reset_non_existence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_key_specs` <a name="put_default_key_specs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs"></a>

```python
def put_default_key_specs(
  value: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

---

##### `reset_default_key_specs` <a name="reset_default_key_specs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs"></a>

```python
def reset_default_key_specs() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_non_existence` <a name="reset_non_existence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetNonExistence"></a>

```python
def reset_non_existence() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs">default_key_specs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput">default_key_specs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput">non_existence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistence">non_existence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_key_specs`<sup>Required</sup> <a name="default_key_specs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs"></a>

```python
default_key_specs: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList</a>

---

##### `default_key_specs_input`<sup>Optional</sup> <a name="default_key_specs_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput"></a>

```python
default_key_specs_input: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs</a>]]

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `non_existence_input`<sup>Optional</sup> <a name="non_existence_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput"></a>

```python
non_existence_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `non_existence`<sup>Required</sup> <a name="non_existence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistence"></a>

```python
non_existence: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsManagedZoneDnssecConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

---


### GoogleDnsManagedZoneForwardingConfigOutputReference <a name="GoogleDnsManagedZoneForwardingConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers">put_target_name_servers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_name_servers` <a name="put_target_name_servers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers"></a>

```python
def put_target_name_servers(
  value: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneForwardingConfigTargetNameServers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServers">target_name_servers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList">GoogleDnsManagedZoneForwardingConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput">target_name_servers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServers"></a>

```python
target_name_servers: GoogleDnsManagedZoneForwardingConfigTargetNameServersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList">GoogleDnsManagedZoneForwardingConfigTargetNameServersList</a>

---

##### `target_name_servers_input`<sup>Optional</sup> <a name="target_name_servers_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput"></a>

```python
target_name_servers_input: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneForwardingConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsManagedZoneForwardingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

---


### GoogleDnsManagedZoneForwardingConfigTargetNameServersList <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServersList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsManagedZoneForwardingConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]]

---


### GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath">reset_forwarding_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forwarding_path` <a name="reset_forwarding_path" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```python
def reset_forwarding_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput">forwarding_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath">forwarding_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarding_path_input`<sup>Optional</sup> <a name="forwarding_path_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```python
forwarding_path_input: str
```

- *Type:* str

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `forwarding_path`<sup>Required</sup> <a name="forwarding_path" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```python
forwarding_path: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsManagedZoneForwardingConfigTargetNameServers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers">GoogleDnsManagedZoneForwardingConfigTargetNameServers</a>]

---


### GoogleDnsManagedZonePeeringConfigOutputReference <a name="GoogleDnsManagedZonePeeringConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork">put_target_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_network` <a name="put_target_network" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork"></a>

```python
def put_target_network(
  network_url: str
) -> None
```

###### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork.parameter.networkUrl"></a>

- *Type:* str

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetwork">target_network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference">GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetwork"></a>

```python
target_network: GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference">GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference</a>

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: GoogleDnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsManagedZonePeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

---


### GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference <a name="GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsManagedZonePeeringConfigTargetNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

---


### GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

---


### GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput">gke_cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName">gke_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_cluster_name_input`<sup>Optional</sup> <a name="gke_cluster_name_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```python
gke_cluster_name_input: str
```

- *Type:* str

---

##### `gke_cluster_name`<sup>Required</sup> <a name="gke_cluster_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName"></a>

```python
gke_cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]

---


### GoogleDnsManagedZonePrivateVisibilityConfigNetworksList <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworksList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]]

---


### GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsManagedZonePrivateVisibilityConfigNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]

---


### GoogleDnsManagedZonePrivateVisibilityConfigOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters">put_gke_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters">reset_gke_clusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks">reset_networks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gke_clusters` <a name="put_gke_clusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters"></a>

```python
def put_gke_clusters(
  value: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]]

---

##### `reset_gke_clusters` <a name="reset_gke_clusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters"></a>

```python
def reset_gke_clusters() -> None
```

##### `reset_networks` <a name="reset_networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks"></a>

```python
def reset_networks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters">gke_clusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList">GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList">GoogleDnsManagedZonePrivateVisibilityConfigNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput">gke_clusters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_clusters`<sup>Required</sup> <a name="gke_clusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters"></a>

```python
gke_clusters: GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList">GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networks"></a>

```python
networks: GoogleDnsManagedZonePrivateVisibilityConfigNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList">GoogleDnsManagedZonePrivateVisibilityConfigNetworksList</a>

---

##### `gke_clusters_input`<sup>Optional</sup> <a name="gke_clusters_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput"></a>

```python
gke_clusters_input: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters">GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters</a>]]

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[GoogleDnsManagedZonePrivateVisibilityConfigNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks">GoogleDnsManagedZonePrivateVisibilityConfigNetworks</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsManagedZonePrivateVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

---


### GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference <a name="GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrlInput">namespace_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrl">namespace_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_url_input`<sup>Optional</sup> <a name="namespace_url_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrlInput"></a>

```python
namespace_url_input: str
```

- *Type:* str

---

##### `namespace_url`<sup>Required</sup> <a name="namespace_url" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrl"></a>

```python
namespace_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsManagedZoneServiceDirectoryConfigNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

---


### GoogleDnsManagedZoneServiceDirectoryConfigOutputReference <a name="GoogleDnsManagedZoneServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace">put_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespace` <a name="put_namespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace"></a>

```python
def put_namespace(
  namespace_url: str
) -> None
```

###### `namespace_url`<sup>Required</sup> <a name="namespace_url" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace.parameter.namespaceUrl"></a>

- *Type:* str

The fully qualified or partial URL of the service directory namespace that should be associated with the zone.

This should be formatted like
'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
Ignored for 'public' visibility zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_dns_managed_zone#namespace_url GoogleDnsManagedZone#namespace_url}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespaceInput">namespace_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespace"></a>

```python
namespace: GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespaceInput"></a>

```python
namespace_input: GoogleDnsManagedZoneServiceDirectoryConfigNamespace
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsManagedZoneServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

---


### GoogleDnsManagedZoneTimeoutsOutputReference <a name="GoogleDnsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_managed_zone

googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsManagedZoneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>]

---



