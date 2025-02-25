# `googleSccManagementOrganizationEventThreatDetectionCustomModule` Submodule <a name="`googleSccManagementOrganizationEventThreatDetectionCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModule <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModule" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module google_scc_management_organization_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_event_threat_detection_custom_module.GoogleSccManagementOrganizationEventThreatDetectionCustomModule;

GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .config(java.lang.String)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code>java.lang.String</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#organization GoogleSccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* java.lang.String

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#config GoogleSccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#display_name GoogleSccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* java.lang.String

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#enablement_state GoogleSccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#location GoogleSccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#timeouts GoogleSccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#type GoogleSccManagementOrganizationEventThreatDetectionCustomModule#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState">resetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts"></a>

```java
public void putTimeouts(GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnablementState` <a name="resetEnablementState" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState"></a>

```java
public void resetEnablementState()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_event_threat_detection_custom_module.GoogleSccManagementOrganizationEventThreatDetectionCustomModule;

GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_event_threat_detection_custom_module.GoogleSccManagementOrganizationEventThreatDetectionCustomModule;

GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_event_threat_detection_custom_module.GoogleSccManagementOrganizationEventThreatDetectionCustomModule;

GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_event_threat_detection_custom_module.GoogleSccManagementOrganizationEventThreatDetectionCustomModule;

GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSccManagementOrganizationEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSccManagementOrganizationEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccManagementOrganizationEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.configInput">configInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.config">config</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts"></a>

```java
public GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.configInput"></a>

```java
public java.lang.String getConfigInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```java
public java.lang.String getEnablementStateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_event_threat_detection_custom_module.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig;

GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .config(java.lang.String)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>java.lang.String</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#organization GoogleSccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#config GoogleSccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#display_name GoogleSccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#enablement_state GoogleSccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#location GoogleSccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```java
public GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#timeouts GoogleSccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#type GoogleSccManagementOrganizationEventThreatDetectionCustomModule#type}

---

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_event_threat_detection_custom_module.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts;

GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#create GoogleSccManagementOrganizationEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#delete GoogleSccManagementOrganizationEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#update GoogleSccManagementOrganizationEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#create GoogleSccManagementOrganizationEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#delete GoogleSccManagementOrganizationEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#update GoogleSccManagementOrganizationEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_management_organization_event_threat_detection_custom_module.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference;

new GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---



