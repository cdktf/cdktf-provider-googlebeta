# `googleVmwareengineNetwork` Submodule <a name="`googleVmwareengineNetwork` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineNetwork <a name="GoogleVmwareengineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network google_vmwareengine_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetwork;

GoogleVmwareengineNetwork.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleVmwareengineNetworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the VMwareEngineNetwork should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the VMwareEngineNetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | VMware Engine network type. Possible values: ["LEGACY", "STANDARD"]. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#id GoogleVmwareengineNetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#project GoogleVmwareengineNetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the VMwareEngineNetwork should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#location GoogleVmwareengineNetwork#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the VMwareEngineNetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#name GoogleVmwareengineNetwork#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.type"></a>

- *Type:* java.lang.String

VMware Engine network type. Possible values: ["LEGACY", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#type GoogleVmwareengineNetwork#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description for this VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#description GoogleVmwareengineNetwork#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#id GoogleVmwareengineNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#project GoogleVmwareengineNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#timeouts GoogleVmwareengineNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.putTimeouts"></a>

```java
public void putTimeouts(GoogleVmwareengineNetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVmwareengineNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetwork;

GoogleVmwareengineNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetwork;

GoogleVmwareengineNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetwork;

GoogleVmwareengineNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetwork;

GoogleVmwareengineNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVmwareengineNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVmwareengineNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVmwareengineNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVmwareengineNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference">GoogleVmwareengineNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.vpcNetworks">vpcNetworks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList">GoogleVmwareengineNetworkVpcNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.timeouts"></a>

```java
public GoogleVmwareengineNetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference">GoogleVmwareengineNetworkTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `vpcNetworks`<sup>Required</sup> <a name="vpcNetworks" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.vpcNetworks"></a>

```java
public GoogleVmwareengineNetworkVpcNetworksList getVpcNetworks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList">GoogleVmwareengineNetworkVpcNetworksList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineNetworkConfig <a name="GoogleVmwareengineNetworkConfig" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetworkConfig;

GoogleVmwareengineNetworkConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleVmwareengineNetworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the VMwareEngineNetwork should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the VMwareEngineNetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.type">type</a></code> | <code>java.lang.String</code> | VMware Engine network type. Possible values: ["LEGACY", "STANDARD"]. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#id GoogleVmwareengineNetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#project GoogleVmwareengineNetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the VMwareEngineNetwork should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#location GoogleVmwareengineNetwork#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the VMwareEngineNetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#name GoogleVmwareengineNetwork#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

VMware Engine network type. Possible values: ["LEGACY", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#type GoogleVmwareengineNetwork#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description for this VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#description GoogleVmwareengineNetwork#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#id GoogleVmwareengineNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#project GoogleVmwareengineNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkConfig.property.timeouts"></a>

```java
public GoogleVmwareengineNetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#timeouts GoogleVmwareengineNetwork#timeouts}

---

### GoogleVmwareengineNetworkTimeouts <a name="GoogleVmwareengineNetworkTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetworkTimeouts;

GoogleVmwareengineNetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#create GoogleVmwareengineNetwork#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#delete GoogleVmwareengineNetwork#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#update GoogleVmwareengineNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#create GoogleVmwareengineNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#delete GoogleVmwareengineNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_network#update GoogleVmwareengineNetwork#update}.

---

### GoogleVmwareengineNetworkVpcNetworks <a name="GoogleVmwareengineNetworkVpcNetworks" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetworkVpcNetworks;

GoogleVmwareengineNetworkVpcNetworks.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineNetworkTimeoutsOutputReference <a name="GoogleVmwareengineNetworkTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetworkTimeoutsOutputReference;

new GoogleVmwareengineNetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkTimeouts">GoogleVmwareengineNetworkTimeouts</a>

---


### GoogleVmwareengineNetworkVpcNetworksList <a name="GoogleVmwareengineNetworkVpcNetworksList" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetworkVpcNetworksList;

new GoogleVmwareengineNetworkVpcNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.get"></a>

```java
public GoogleVmwareengineNetworkVpcNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleVmwareengineNetworkVpcNetworksOutputReference <a name="GoogleVmwareengineNetworkVpcNetworksOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vmwareengine_network.GoogleVmwareengineNetworkVpcNetworksOutputReference;

new GoogleVmwareengineNetworkVpcNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworks">GoogleVmwareengineNetworkVpcNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworksOutputReference.property.internalValue"></a>

```java
public GoogleVmwareengineNetworkVpcNetworks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetwork.GoogleVmwareengineNetworkVpcNetworks">GoogleVmwareengineNetworkVpcNetworks</a>

---



