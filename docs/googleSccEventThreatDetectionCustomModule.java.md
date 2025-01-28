# `googleSccEventThreatDetectionCustomModule` Submodule <a name="`googleSccEventThreatDetectionCustomModule` Submodule" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccEventThreatDetectionCustomModule <a name="GoogleSccEventThreatDetectionCustomModule" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module google_scc_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_event_threat_detection_custom_module.GoogleSccEventThreatDetectionCustomModule;

GoogleSccEventThreatDetectionCustomModule.Builder.create(Construct scope, java.lang.String id)
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
    .config(java.lang.String)
    .enablementState(java.lang.String)
    .organization(java.lang.String)
    .type(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleSccEventThreatDetectionCustomModuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code>java.lang.String</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* java.lang.String

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#config GoogleSccEventThreatDetectionCustomModule#config}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* java.lang.String

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#enablement_state GoogleSccEventThreatDetectionCustomModule#enablement_state}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#organization GoogleSccEventThreatDetectionCustomModule#organization}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#type GoogleSccEventThreatDetectionCustomModule#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#display_name GoogleSccEventThreatDetectionCustomModule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#timeouts GoogleSccEventThreatDetectionCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts"></a>

```java
public void putTimeouts(GoogleSccEventThreatDetectionCustomModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_event_threat_detection_custom_module.GoogleSccEventThreatDetectionCustomModule;

GoogleSccEventThreatDetectionCustomModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_event_threat_detection_custom_module.GoogleSccEventThreatDetectionCustomModule;

GoogleSccEventThreatDetectionCustomModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_event_threat_detection_custom_module.GoogleSccEventThreatDetectionCustomModule;

GoogleSccEventThreatDetectionCustomModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_event_threat_detection_custom_module.GoogleSccEventThreatDetectionCustomModule;

GoogleSccEventThreatDetectionCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSccEventThreatDetectionCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSccEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSccEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput">configInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config">config</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts"></a>

```java
public GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput"></a>

```java
public java.lang.String getConfigInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```java
public java.lang.String getEnablementStateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccEventThreatDetectionCustomModuleConfig <a name="GoogleSccEventThreatDetectionCustomModuleConfig" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_event_threat_detection_custom_module.GoogleSccEventThreatDetectionCustomModuleConfig;

GoogleSccEventThreatDetectionCustomModuleConfig.builder()
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
    .config(java.lang.String)
    .enablementState(java.lang.String)
    .organization(java.lang.String)
    .type(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleSccEventThreatDetectionCustomModuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>java.lang.String</code> | Config for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#config GoogleSccEventThreatDetectionCustomModule#config}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#enablement_state GoogleSccEventThreatDetectionCustomModule#enablement_state}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#organization GoogleSccEventThreatDetectionCustomModule#organization}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#type GoogleSccEventThreatDetectionCustomModule#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#display_name GoogleSccEventThreatDetectionCustomModule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```java
public GoogleSccEventThreatDetectionCustomModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#timeouts GoogleSccEventThreatDetectionCustomModule#timeouts}

---

### GoogleSccEventThreatDetectionCustomModuleTimeouts <a name="GoogleSccEventThreatDetectionCustomModuleTimeouts" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_event_threat_detection_custom_module.GoogleSccEventThreatDetectionCustomModuleTimeouts;

GoogleSccEventThreatDetectionCustomModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_scc_event_threat_detection_custom_module.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference;

new GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---



