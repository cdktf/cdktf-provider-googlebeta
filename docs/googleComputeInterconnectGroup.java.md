# `googleComputeInterconnectGroup` Submodule <a name="`googleComputeInterconnectGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectGroup <a name="GoogleComputeInterconnectGroup" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group google_compute_interconnect_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroup;

GoogleComputeInterconnectGroup.Builder.create(Construct scope, java.lang.String id)
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
    .intent(GoogleComputeInterconnectGroupIntent)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .interconnects(IResolvable)
//  .interconnects(java.util.List<GoogleComputeInterconnectGroupInterconnects>)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeInterconnectGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.intent">intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.interconnects">interconnects</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>></code> | interconnects block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.intent"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#intent GoogleComputeInterconnectGroup#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#description GoogleComputeInterconnectGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnects`<sup>Optional</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.interconnects"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>>

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#interconnects GoogleComputeInterconnectGroup#interconnects}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#timeouts GoogleComputeInterconnectGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent">putIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects">putInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetInterconnects">resetInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIntent` <a name="putIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent"></a>

```java
public void putIntent(GoogleComputeInterconnectGroupIntent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putIntent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---

##### `putInterconnects` <a name="putInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects"></a>

```java
public void putInterconnects(IResolvable OR java.util.List<GoogleComputeInterconnectGroupInterconnects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putInterconnects.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeInterconnectGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetId"></a>

```java
public void resetId()
```

##### `resetInterconnects` <a name="resetInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetInterconnects"></a>

```java
public void resetInterconnects()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInterconnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroup;

GoogleComputeInterconnectGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroup;

GoogleComputeInterconnectGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroup;

GoogleComputeInterconnectGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroup;

GoogleComputeInterconnectGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeInterconnectGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeInterconnectGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeInterconnectGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeInterconnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.configured">configured</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList">GoogleComputeInterconnectGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference">GoogleComputeInterconnectGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnects">interconnects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList">GoogleComputeInterconnectGroupInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.physicalStructure">physicalStructure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList">GoogleComputeInterconnectGroupPhysicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference">GoogleComputeInterconnectGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intentInput">intentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnectsInput">interconnectsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.configured"></a>

```java
public GoogleComputeInterconnectGroupConfiguredList getConfigured();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList">GoogleComputeInterconnectGroupConfiguredList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intent"></a>

```java
public GoogleComputeInterconnectGroupIntentOutputReference getIntent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference">GoogleComputeInterconnectGroupIntentOutputReference</a>

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnects"></a>

```java
public GoogleComputeInterconnectGroupInterconnectsList getInterconnects();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList">GoogleComputeInterconnectGroupInterconnectsList</a>

---

##### `physicalStructure`<sup>Required</sup> <a name="physicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.physicalStructure"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureList getPhysicalStructure();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList">GoogleComputeInterconnectGroupPhysicalStructureList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeouts"></a>

```java
public GoogleComputeInterconnectGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference">GoogleComputeInterconnectGroupTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `intentInput`<sup>Optional</sup> <a name="intentInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.intentInput"></a>

```java
public GoogleComputeInterconnectGroupIntent getIntentInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---

##### `interconnectsInput`<sup>Optional</sup> <a name="interconnectsInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.interconnectsInput"></a>

```java
public java.lang.Object getInterconnectsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectGroupConfig <a name="GoogleComputeInterconnectGroupConfig" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfig;

GoogleComputeInterconnectGroupConfig.builder()
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
    .intent(GoogleComputeInterconnectGroupIntent)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .interconnects(IResolvable)
//  .interconnects(java.util.List<GoogleComputeInterconnectGroupInterconnects>)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeInterconnectGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.interconnects">interconnects</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>></code> | interconnects block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.intent"></a>

```java
public GoogleComputeInterconnectGroupIntent getIntent();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#intent GoogleComputeInterconnectGroup#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#description GoogleComputeInterconnectGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#id GoogleComputeInterconnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnects`<sup>Optional</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.interconnects"></a>

```java
public java.lang.Object getInterconnects();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>>

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#interconnects GoogleComputeInterconnectGroup#interconnects}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#project GoogleComputeInterconnectGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfig.property.timeouts"></a>

```java
public GoogleComputeInterconnectGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#timeouts GoogleComputeInterconnectGroup#timeouts}

---

### GoogleComputeInterconnectGroupConfigured <a name="GoogleComputeInterconnectGroupConfigured" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfigured;

GoogleComputeInterconnectGroupConfigured.builder()
    .build();
```


### GoogleComputeInterconnectGroupConfiguredTopologyCapability <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfiguredTopologyCapability;

GoogleComputeInterconnectGroupConfiguredTopologyCapability.builder()
    .build();
```


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers;

GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers.builder()
    .build();
```


### GoogleComputeInterconnectGroupIntent <a name="GoogleComputeInterconnectGroupIntent" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupIntent;

GoogleComputeInterconnectGroupIntent.builder()
//  .topologyCapability(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.property.topologyCapability">topologyCapability</a></code> | <code>java.lang.String</code> | The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs. |

---

##### `topologyCapability`<sup>Optional</sup> <a name="topologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent.property.topologyCapability"></a>

```java
public java.lang.String getTopologyCapability();
```

- *Type:* java.lang.String

The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs.

Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#topology_capability GoogleComputeInterconnectGroup#topology_capability}

---

### GoogleComputeInterconnectGroupInterconnects <a name="GoogleComputeInterconnectGroupInterconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupInterconnects;

GoogleComputeInterconnectGroupInterconnects.builder()
    .name(java.lang.String)
//  .interconnect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.interconnect">interconnect</a></code> | <code>java.lang.String</code> | The URL of an Interconnect in this group. All Interconnects in the group are unique. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#name GoogleComputeInterconnectGroup#name}.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects.property.interconnect"></a>

```java
public java.lang.String getInterconnect();
```

- *Type:* java.lang.String

The URL of an Interconnect in this group. All Interconnects in the group are unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#interconnect GoogleComputeInterconnectGroup#interconnect}

---

### GoogleComputeInterconnectGroupPhysicalStructure <a name="GoogleComputeInterconnectGroupPhysicalStructure" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructure;

GoogleComputeInterconnectGroupPhysicalStructure.builder()
    .build();
```


### GoogleComputeInterconnectGroupPhysicalStructureMetros <a name="GoogleComputeInterconnectGroupPhysicalStructureMetros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetros;

GoogleComputeInterconnectGroupPhysicalStructureMetros.builder()
    .build();
```


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities;

GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities.builder()
    .build();
```


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones;

GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones.builder()
    .build();
```


### GoogleComputeInterconnectGroupTimeouts <a name="GoogleComputeInterconnectGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupTimeouts;

GoogleComputeInterconnectGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#create GoogleComputeInterconnectGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#delete GoogleComputeInterconnectGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#update GoogleComputeInterconnectGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#create GoogleComputeInterconnectGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#delete GoogleComputeInterconnectGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_compute_interconnect_group#update GoogleComputeInterconnectGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectGroupConfiguredList <a name="GoogleComputeInterconnectGroupConfiguredList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfiguredList;

new GoogleComputeInterconnectGroupConfiguredList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get"></a>

```java
public GoogleComputeInterconnectGroupConfiguredOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInterconnectGroupConfiguredOutputReference <a name="GoogleComputeInterconnectGroupConfiguredOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfiguredOutputReference;

new GoogleComputeInterconnectGroupConfiguredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability">topologyCapability</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured">GoogleComputeInterconnectGroupConfigured</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topologyCapability`<sup>Required</sup> <a name="topologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability"></a>

```java
public GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList getTopologyCapability();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectGroupConfigured getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfigured">GoogleComputeInterconnectGroupConfigured</a>

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get"></a>

```java
public GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType">blockerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink">documentationLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation">explanation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities">facilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects">interconnects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros">metros</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockerType`<sup>Required</sup> <a name="blockerType" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType"></a>

```java
public java.lang.String getBlockerType();
```

- *Type:* java.lang.String

---

##### `documentationLink`<sup>Required</sup> <a name="documentationLink" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink"></a>

```java
public java.lang.String getDocumentationLink();
```

- *Type:* java.lang.String

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation"></a>

```java
public java.lang.String getExplanation();
```

- *Type:* java.lang.String

---

##### `facilities`<sup>Required</sup> <a name="facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities"></a>

```java
public java.util.List<java.lang.String> getFacilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects"></a>

```java
public java.util.List<java.lang.String> getInterconnects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros"></a>

```java
public java.util.List<java.lang.String> getMetros();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a>

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get"></a>

```java
public GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference <a name="GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference;

new GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers">intendedCapabilityBlockers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla">supportedSla</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability">GoogleComputeInterconnectGroupConfiguredTopologyCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intendedCapabilityBlockers`<sup>Required</sup> <a name="intendedCapabilityBlockers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers"></a>

```java
public GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList getIntendedCapabilityBlockers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">GoogleComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a>

---

##### `supportedSla`<sup>Required</sup> <a name="supportedSla" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla"></a>

```java
public java.lang.String getSupportedSla();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectGroupConfiguredTopologyCapability getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupConfiguredTopologyCapability">GoogleComputeInterconnectGroupConfiguredTopologyCapability</a>

---


### GoogleComputeInterconnectGroupIntentOutputReference <a name="GoogleComputeInterconnectGroupIntentOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupIntentOutputReference;

new GoogleComputeInterconnectGroupIntentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resetTopologyCapability">resetTopologyCapability</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopologyCapability` <a name="resetTopologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.resetTopologyCapability"></a>

```java
public void resetTopologyCapability()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput">topologyCapabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapability">topologyCapability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topologyCapabilityInput`<sup>Optional</sup> <a name="topologyCapabilityInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput"></a>

```java
public java.lang.String getTopologyCapabilityInput();
```

- *Type:* java.lang.String

---

##### `topologyCapability`<sup>Required</sup> <a name="topologyCapability" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.topologyCapability"></a>

```java
public java.lang.String getTopologyCapability();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntentOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectGroupIntent getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupIntent">GoogleComputeInterconnectGroupIntent</a>

---


### GoogleComputeInterconnectGroupInterconnectsList <a name="GoogleComputeInterconnectGroupInterconnectsList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupInterconnectsList;

new GoogleComputeInterconnectGroupInterconnectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get"></a>

```java
public GoogleComputeInterconnectGroupInterconnectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>>

---


### GoogleComputeInterconnectGroupInterconnectsOutputReference <a name="GoogleComputeInterconnectGroupInterconnectsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupInterconnectsOutputReference;

new GoogleComputeInterconnectGroupInterconnectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect">resetInterconnect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterconnect` <a name="resetInterconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect"></a>

```java
public void resetInterconnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput">interconnectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnect">interconnect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput"></a>

```java
public java.lang.String getInterconnectInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.interconnect"></a>

```java
public java.lang.String getInterconnect();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnectsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupInterconnects">GoogleComputeInterconnectGroupInterconnects</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureList <a name="GoogleComputeInterconnectGroupPhysicalStructureList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureList;

new GoogleComputeInterconnectGroupPhysicalStructureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility">facility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones">zones</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `facility`<sup>Required</sup> <a name="facility" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility"></a>

```java
public java.lang.String getFacility();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList getZones();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilities</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects">interconnects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects"></a>

```java
public java.util.List<java.lang.String> getInterconnects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosList <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosList" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetrosList;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference;

new GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities">facilities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro">metro</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros">GoogleComputeInterconnectGroupPhysicalStructureMetros</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `facilities`<sup>Required</sup> <a name="facilities" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList getFacilities();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">GoogleComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a>

---

##### `metro`<sup>Required</sup> <a name="metro" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro"></a>

```java
public java.lang.String getMetro();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetros getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetros">GoogleComputeInterconnectGroupPhysicalStructureMetros</a>

---


### GoogleComputeInterconnectGroupPhysicalStructureOutputReference <a name="GoogleComputeInterconnectGroupPhysicalStructureOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupPhysicalStructureOutputReference;

new GoogleComputeInterconnectGroupPhysicalStructureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.metros">metros</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList">GoogleComputeInterconnectGroupPhysicalStructureMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure">GoogleComputeInterconnectGroupPhysicalStructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.metros"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructureMetrosList getMetros();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureMetrosList">GoogleComputeInterconnectGroupPhysicalStructureMetrosList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue"></a>

```java
public GoogleComputeInterconnectGroupPhysicalStructure getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupPhysicalStructure">GoogleComputeInterconnectGroupPhysicalStructure</a>

---


### GoogleComputeInterconnectGroupTimeoutsOutputReference <a name="GoogleComputeInterconnectGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_interconnect_group.GoogleComputeInterconnectGroupTimeoutsOutputReference;

new GoogleComputeInterconnectGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeInterconnectGroup.GoogleComputeInterconnectGroupTimeouts">GoogleComputeInterconnectGroupTimeouts</a>

---



