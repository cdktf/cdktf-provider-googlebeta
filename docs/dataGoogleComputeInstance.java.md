# `dataGoogleComputeInstance` Submodule <a name="`dataGoogleComputeInstance` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstance <a name="DataGoogleComputeInstance" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance google_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstance;

DataGoogleComputeInstance.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .selfLink(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#id DataGoogleComputeInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.selfLink">selfLink</a></code> | <code>java.lang.String</code> | The URI of the created resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone of the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#id DataGoogleComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#name DataGoogleComputeInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#project DataGoogleComputeInstance#project}

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.selfLink"></a>

- *Type:* java.lang.String

The URI of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#self_link DataGoogleComputeInstance#self_link}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#zone DataGoogleComputeInstance#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetSelfLink">resetSelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetSelfLink` <a name="resetSelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetSelfLink"></a>

```java
public void resetSelfLink()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstance;

DataGoogleComputeInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstance;

DataGoogleComputeInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstance;

DataGoogleComputeInstance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstance;

DataGoogleComputeInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleComputeInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList">DataGoogleComputeInstanceAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.allowStoppingForUpdate">allowStoppingForUpdate</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.attachedDisk">attachedDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList">DataGoogleComputeInstanceAttachedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList">DataGoogleComputeInstanceBootDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.canIpForward">canIpForward</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList">DataGoogleComputeInstanceConfidentialInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.cpuPlatform">cpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.currentStatus">currentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.deletionProtection">deletionProtection</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.desiredStatus">desiredStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.enableDisplay">enableDisplay</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList">DataGoogleComputeInstanceGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.instanceEncryptionKey">instanceEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList">DataGoogleComputeInstanceInstanceEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadataFingerprint">metadataFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList">DataGoogleComputeInstanceNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList">DataGoogleComputeInstanceNetworkPerformanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList">DataGoogleComputeInstanceParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.partnerMetadata">partnerMetadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList">DataGoogleComputeInstanceReservationAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList">DataGoogleComputeInstanceSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.scratchDisk">scratchDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList">DataGoogleComputeInstanceScratchDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList">DataGoogleComputeInstanceServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList">DataGoogleComputeInstanceShieldedInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tagsFingerprint">tagsFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.selfLinkInput">selfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.advancedMachineFeatures"></a>

```java
public DataGoogleComputeInstanceAdvancedMachineFeaturesList getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList">DataGoogleComputeInstanceAdvancedMachineFeaturesList</a>

---

##### `allowStoppingForUpdate`<sup>Required</sup> <a name="allowStoppingForUpdate" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.allowStoppingForUpdate"></a>

```java
public IResolvable getAllowStoppingForUpdate();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `attachedDisk`<sup>Required</sup> <a name="attachedDisk" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.attachedDisk"></a>

```java
public DataGoogleComputeInstanceAttachedDiskList getAttachedDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList">DataGoogleComputeInstanceAttachedDiskList</a>

---

##### `bootDisk`<sup>Required</sup> <a name="bootDisk" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.bootDisk"></a>

```java
public DataGoogleComputeInstanceBootDiskList getBootDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList">DataGoogleComputeInstanceBootDiskList</a>

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.canIpForward"></a>

```java
public IResolvable getCanIpForward();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.confidentialInstanceConfig"></a>

```java
public DataGoogleComputeInstanceConfidentialInstanceConfigList getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList">DataGoogleComputeInstanceConfidentialInstanceConfigList</a>

---

##### `cpuPlatform`<sup>Required</sup> <a name="cpuPlatform" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.cpuPlatform"></a>

```java
public java.lang.String getCpuPlatform();
```

- *Type:* java.lang.String

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `currentStatus`<sup>Required</sup> <a name="currentStatus" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.currentStatus"></a>

```java
public java.lang.String getCurrentStatus();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.deletionProtection"></a>

```java
public IResolvable getDeletionProtection();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredStatus`<sup>Required</sup> <a name="desiredStatus" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.desiredStatus"></a>

```java
public java.lang.String getDesiredStatus();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `enableDisplay`<sup>Required</sup> <a name="enableDisplay" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.enableDisplay"></a>

```java
public IResolvable getEnableDisplay();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.guestAccelerator"></a>

```java
public DataGoogleComputeInstanceGuestAcceleratorList getGuestAccelerator();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList">DataGoogleComputeInstanceGuestAcceleratorList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `instanceEncryptionKey`<sup>Required</sup> <a name="instanceEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.instanceEncryptionKey"></a>

```java
public DataGoogleComputeInstanceInstanceEncryptionKeyList getInstanceEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList">DataGoogleComputeInstanceInstanceEncryptionKeyList</a>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `keyRevocationActionType`<sup>Required</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.keyRevocationActionType"></a>

```java
public java.lang.String getKeyRevocationActionType();
```

- *Type:* java.lang.String

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `metadataFingerprint`<sup>Required</sup> <a name="metadataFingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadataFingerprint"></a>

```java
public java.lang.String getMetadataFingerprint();
```

- *Type:* java.lang.String

---

##### `metadataStartupScript`<sup>Required</sup> <a name="metadataStartupScript" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.metadataStartupScript"></a>

```java
public java.lang.String getMetadataStartupScript();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.networkInterface"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList">DataGoogleComputeInstanceNetworkInterfaceList</a>

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.networkPerformanceConfig"></a>

```java
public DataGoogleComputeInstanceNetworkPerformanceConfigList getNetworkPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList">DataGoogleComputeInstanceNetworkPerformanceConfigList</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.params"></a>

```java
public DataGoogleComputeInstanceParamsList getParams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList">DataGoogleComputeInstanceParamsList</a>

---

##### `partnerMetadata`<sup>Required</sup> <a name="partnerMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.partnerMetadata"></a>

```java
public StringMap getPartnerMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.reservationAffinity"></a>

```java
public DataGoogleComputeInstanceReservationAffinityList getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList">DataGoogleComputeInstanceReservationAffinityList</a>

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.scheduling"></a>

```java
public DataGoogleComputeInstanceSchedulingList getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList">DataGoogleComputeInstanceSchedulingList</a>

---

##### `scratchDisk`<sup>Required</sup> <a name="scratchDisk" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.scratchDisk"></a>

```java
public DataGoogleComputeInstanceScratchDiskList getScratchDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList">DataGoogleComputeInstanceScratchDiskList</a>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.serviceAccount"></a>

```java
public DataGoogleComputeInstanceServiceAccountList getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList">DataGoogleComputeInstanceServiceAccountList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.shieldedInstanceConfig"></a>

```java
public DataGoogleComputeInstanceShieldedInstanceConfigList getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList">DataGoogleComputeInstanceShieldedInstanceConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsFingerprint`<sup>Required</sup> <a name="tagsFingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tagsFingerprint"></a>

```java
public java.lang.String getTagsFingerprint();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `selfLinkInput`<sup>Optional</sup> <a name="selfLinkInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.selfLinkInput"></a>

```java
public java.lang.String getSelfLinkInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceAdvancedMachineFeatures <a name="DataGoogleComputeInstanceAdvancedMachineFeatures" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceAdvancedMachineFeatures;

DataGoogleComputeInstanceAdvancedMachineFeatures.builder()
    .build();
```


### DataGoogleComputeInstanceAttachedDisk <a name="DataGoogleComputeInstanceAttachedDisk" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceAttachedDisk;

DataGoogleComputeInstanceAttachedDisk.builder()
    .build();
```


### DataGoogleComputeInstanceBootDisk <a name="DataGoogleComputeInstanceBootDisk" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDisk;

DataGoogleComputeInstanceBootDisk.builder()
    .build();
```


### DataGoogleComputeInstanceBootDiskInitializeParams <a name="DataGoogleComputeInstanceBootDiskInitializeParams" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParams;

DataGoogleComputeInstanceBootDiskInitializeParams.builder()
    .build();
```


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey;

DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey.builder()
    .build();
```


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey;

DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey.builder()
    .build();
```


### DataGoogleComputeInstanceConfidentialInstanceConfig <a name="DataGoogleComputeInstanceConfidentialInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceConfidentialInstanceConfig;

DataGoogleComputeInstanceConfidentialInstanceConfig.builder()
    .build();
```


### DataGoogleComputeInstanceConfig <a name="DataGoogleComputeInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceConfig;

DataGoogleComputeInstanceConfig.builder()
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .selfLink(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#id DataGoogleComputeInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | The URI of the created resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone of the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#id DataGoogleComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#name DataGoogleComputeInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#project DataGoogleComputeInstance#project}

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

The URI of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#self_link DataGoogleComputeInstance#self_link}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/data-sources/google_compute_instance#zone DataGoogleComputeInstance#zone}

---

### DataGoogleComputeInstanceGuestAccelerator <a name="DataGoogleComputeInstanceGuestAccelerator" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceGuestAccelerator;

DataGoogleComputeInstanceGuestAccelerator.builder()
    .build();
```


### DataGoogleComputeInstanceInstanceEncryptionKey <a name="DataGoogleComputeInstanceInstanceEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceInstanceEncryptionKey;

DataGoogleComputeInstanceInstanceEncryptionKey.builder()
    .build();
```


### DataGoogleComputeInstanceNetworkInterface <a name="DataGoogleComputeInstanceNetworkInterface" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterface;

DataGoogleComputeInstanceNetworkInterface.builder()
    .build();
```


### DataGoogleComputeInstanceNetworkInterfaceAccessConfig <a name="DataGoogleComputeInstanceNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig;

DataGoogleComputeInstanceNetworkInterfaceAccessConfig.builder()
    .build();
```


### DataGoogleComputeInstanceNetworkInterfaceAliasIpRange <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange;

DataGoogleComputeInstanceNetworkInterfaceAliasIpRange.builder()
    .build();
```


### DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig <a name="DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig;

DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig.builder()
    .build();
```


### DataGoogleComputeInstanceNetworkPerformanceConfig <a name="DataGoogleComputeInstanceNetworkPerformanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkPerformanceConfig;

DataGoogleComputeInstanceNetworkPerformanceConfig.builder()
    .build();
```


### DataGoogleComputeInstanceParams <a name="DataGoogleComputeInstanceParams" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceParams;

DataGoogleComputeInstanceParams.builder()
    .build();
```


### DataGoogleComputeInstanceReservationAffinity <a name="DataGoogleComputeInstanceReservationAffinity" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceReservationAffinity;

DataGoogleComputeInstanceReservationAffinity.builder()
    .build();
```


### DataGoogleComputeInstanceReservationAffinitySpecificReservation <a name="DataGoogleComputeInstanceReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceReservationAffinitySpecificReservation;

DataGoogleComputeInstanceReservationAffinitySpecificReservation.builder()
    .build();
```


### DataGoogleComputeInstanceScheduling <a name="DataGoogleComputeInstanceScheduling" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceScheduling;

DataGoogleComputeInstanceScheduling.builder()
    .build();
```


### DataGoogleComputeInstanceSchedulingGracefulShutdown <a name="DataGoogleComputeInstanceSchedulingGracefulShutdown" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingGracefulShutdown;

DataGoogleComputeInstanceSchedulingGracefulShutdown.builder()
    .build();
```


### DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration;

DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration.builder()
    .build();
```


### DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout <a name="DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout;

DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout.builder()
    .build();
```


### DataGoogleComputeInstanceSchedulingMaxRunDuration <a name="DataGoogleComputeInstanceSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingMaxRunDuration;

DataGoogleComputeInstanceSchedulingMaxRunDuration.builder()
    .build();
```


### DataGoogleComputeInstanceSchedulingNodeAffinities <a name="DataGoogleComputeInstanceSchedulingNodeAffinities" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingNodeAffinities;

DataGoogleComputeInstanceSchedulingNodeAffinities.builder()
    .build();
```


### DataGoogleComputeInstanceSchedulingOnInstanceStopAction <a name="DataGoogleComputeInstanceSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction;

DataGoogleComputeInstanceSchedulingOnInstanceStopAction.builder()
    .build();
```


### DataGoogleComputeInstanceScratchDisk <a name="DataGoogleComputeInstanceScratchDisk" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceScratchDisk;

DataGoogleComputeInstanceScratchDisk.builder()
    .build();
```


### DataGoogleComputeInstanceServiceAccount <a name="DataGoogleComputeInstanceServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceServiceAccount;

DataGoogleComputeInstanceServiceAccount.builder()
    .build();
```


### DataGoogleComputeInstanceShieldedInstanceConfig <a name="DataGoogleComputeInstanceShieldedInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceShieldedInstanceConfig;

DataGoogleComputeInstanceShieldedInstanceConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceAdvancedMachineFeaturesList <a name="DataGoogleComputeInstanceAdvancedMachineFeaturesList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceAdvancedMachineFeaturesList;

new DataGoogleComputeInstanceAdvancedMachineFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.get"></a>

```java
public DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference <a name="DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference;

new DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboMode">turboMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visibleCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures">DataGoogleComputeInstanceAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```java
public IResolvable getEnableNestedVirtualization();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableUefiNetworking`<sup>Required</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```java
public IResolvable getEnableUefiNetworking();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `performanceMonitoringUnit`<sup>Required</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```java
public java.lang.String getPerformanceMonitoringUnit();
```

- *Type:* java.lang.String

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `turboMode`<sup>Required</sup> <a name="turboMode" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```java
public java.lang.String getTurboMode();
```

- *Type:* java.lang.String

---

##### `visibleCoreCount`<sup>Required</sup> <a name="visibleCoreCount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```java
public java.lang.Number getVisibleCoreCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceAdvancedMachineFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAdvancedMachineFeatures">DataGoogleComputeInstanceAdvancedMachineFeatures</a>

---


### DataGoogleComputeInstanceAttachedDiskList <a name="DataGoogleComputeInstanceAttachedDiskList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceAttachedDiskList;

new DataGoogleComputeInstanceAttachedDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.get"></a>

```java
public DataGoogleComputeInstanceAttachedDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceAttachedDiskOutputReference <a name="DataGoogleComputeInstanceAttachedDiskOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceAttachedDiskOutputReference;

new DataGoogleComputeInstanceAttachedDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRaw">diskEncryptionKeyRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRsa">diskEncryptionKeyRsa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeySha256">diskEncryptionKeySha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionServiceAccount">diskEncryptionServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.forceAttach">forceAttach</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk">DataGoogleComputeInstanceAttachedDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyRaw`<sup>Required</sup> <a name="diskEncryptionKeyRaw" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```java
public java.lang.String getDiskEncryptionKeyRaw();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyRsa`<sup>Required</sup> <a name="diskEncryptionKeyRsa" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeyRsa"></a>

```java
public java.lang.String getDiskEncryptionKeyRsa();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeySha256`<sup>Required</sup> <a name="diskEncryptionKeySha256" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionKeySha256"></a>

```java
public java.lang.String getDiskEncryptionKeySha256();
```

- *Type:* java.lang.String

---

##### `diskEncryptionServiceAccount`<sup>Required</sup> <a name="diskEncryptionServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.diskEncryptionServiceAccount"></a>

```java
public java.lang.String getDiskEncryptionServiceAccount();
```

- *Type:* java.lang.String

---

##### `forceAttach`<sup>Required</sup> <a name="forceAttach" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.forceAttach"></a>

```java
public IResolvable getForceAttach();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDiskOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceAttachedDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceAttachedDisk">DataGoogleComputeInstanceAttachedDisk</a>

---


### DataGoogleComputeInstanceBootDiskInitializeParamsList <a name="DataGoogleComputeInstanceBootDiskInitializeParamsList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParamsList;

new DataGoogleComputeInstanceBootDiskInitializeParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.get"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference <a name="DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference;

new DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIops">provisionedIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.snapshot">snapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList">DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList">DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams">DataGoogleComputeInstanceBootDiskInitializeParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute"></a>

```java
public IResolvable getEnableConfidentialCompute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedIops"></a>

```java
public java.lang.Number getProvisionedIops();
```

- *Type:* java.lang.Number

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.provisionedThroughput"></a>

```java
public java.lang.Number getProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourceManagerTags"></a>

```java
public StringMap getResourceManagerTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.snapshot"></a>

```java
public java.lang.String getSnapshot();
```

- *Type:* java.lang.String

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sourceImageEncryptionKey"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList">DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList</a>

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.sourceSnapshotEncryptionKey"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList">DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList</a>

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParams">DataGoogleComputeInstanceBootDiskInitializeParams</a>

---


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList;

new DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.get"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference;

new DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey">DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey">DataGoogleComputeInstanceBootDiskInitializeParamsSourceImageEncryptionKey</a>

---


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList;

new DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.get"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference;

new DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey">DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey">DataGoogleComputeInstanceBootDiskInitializeParamsSourceSnapshotEncryptionKey</a>

---


### DataGoogleComputeInstanceBootDiskList <a name="DataGoogleComputeInstanceBootDiskList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskList;

new DataGoogleComputeInstanceBootDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.get"></a>

```java
public DataGoogleComputeInstanceBootDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceBootDiskOutputReference <a name="DataGoogleComputeInstanceBootDiskOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceBootDiskOutputReference;

new DataGoogleComputeInstanceBootDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRaw">diskEncryptionKeyRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRsa">diskEncryptionKeyRsa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeySha256">diskEncryptionKeySha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionServiceAccount">diskEncryptionServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.forceAttach">forceAttach</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.guestOsFeatures">guestOsFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.initializeParams">initializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList">DataGoogleComputeInstanceBootDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk">DataGoogleComputeInstanceBootDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.autoDelete"></a>

```java
public IResolvable getAutoDelete();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyRaw`<sup>Required</sup> <a name="diskEncryptionKeyRaw" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```java
public java.lang.String getDiskEncryptionKeyRaw();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyRsa`<sup>Required</sup> <a name="diskEncryptionKeyRsa" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeyRsa"></a>

```java
public java.lang.String getDiskEncryptionKeyRsa();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeySha256`<sup>Required</sup> <a name="diskEncryptionKeySha256" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionKeySha256"></a>

```java
public java.lang.String getDiskEncryptionKeySha256();
```

- *Type:* java.lang.String

---

##### `diskEncryptionServiceAccount`<sup>Required</sup> <a name="diskEncryptionServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.diskEncryptionServiceAccount"></a>

```java
public java.lang.String getDiskEncryptionServiceAccount();
```

- *Type:* java.lang.String

---

##### `forceAttach`<sup>Required</sup> <a name="forceAttach" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.forceAttach"></a>

```java
public IResolvable getForceAttach();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `guestOsFeatures`<sup>Required</sup> <a name="guestOsFeatures" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.guestOsFeatures"></a>

```java
public java.util.List<java.lang.String> getGuestOsFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `initializeParams`<sup>Required</sup> <a name="initializeParams" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.initializeParams"></a>

```java
public DataGoogleComputeInstanceBootDiskInitializeParamsList getInitializeParams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskInitializeParamsList">DataGoogleComputeInstanceBootDiskInitializeParamsList</a>

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDiskOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceBootDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceBootDisk">DataGoogleComputeInstanceBootDisk</a>

---


### DataGoogleComputeInstanceConfidentialInstanceConfigList <a name="DataGoogleComputeInstanceConfidentialInstanceConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceConfidentialInstanceConfigList;

new DataGoogleComputeInstanceConfidentialInstanceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.get"></a>

```java
public DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference <a name="DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference;

new DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig">DataGoogleComputeInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidentialInstanceType`<sup>Required</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```java
public java.lang.String getConfidentialInstanceType();
```

- *Type:* java.lang.String

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```java
public IResolvable getEnableConfidentialCompute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceConfidentialInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceConfidentialInstanceConfig">DataGoogleComputeInstanceConfidentialInstanceConfig</a>

---


### DataGoogleComputeInstanceGuestAcceleratorList <a name="DataGoogleComputeInstanceGuestAcceleratorList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceGuestAcceleratorList;

new DataGoogleComputeInstanceGuestAcceleratorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.get"></a>

```java
public DataGoogleComputeInstanceGuestAcceleratorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceGuestAcceleratorOutputReference <a name="DataGoogleComputeInstanceGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceGuestAcceleratorOutputReference;

new DataGoogleComputeInstanceGuestAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator">DataGoogleComputeInstanceGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAcceleratorOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceGuestAccelerator getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceGuestAccelerator">DataGoogleComputeInstanceGuestAccelerator</a>

---


### DataGoogleComputeInstanceInstanceEncryptionKeyList <a name="DataGoogleComputeInstanceInstanceEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceInstanceEncryptionKeyList;

new DataGoogleComputeInstanceInstanceEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.get"></a>

```java
public DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference;

new DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey">DataGoogleComputeInstanceInstanceEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceInstanceEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceInstanceEncryptionKey">DataGoogleComputeInstanceInstanceEncryptionKey</a>

---


### DataGoogleComputeInstanceNetworkInterfaceAccessConfigList <a name="DataGoogleComputeInstanceNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList;

new DataGoogleComputeInstanceNetworkInterfaceAccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.get"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference;

new DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIp">natIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig">DataGoogleComputeInstanceNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `natIp`<sup>Required</sup> <a name="natIp" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```java
public java.lang.String getNatIp();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceAccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfig">DataGoogleComputeInstanceNetworkInterfaceAccessConfig</a>

---


### DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList;

new DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference;

new DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange">DataGoogleComputeInstanceNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceAliasIpRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRange">DataGoogleComputeInstanceNetworkInterfaceAliasIpRange</a>

---


### DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList <a name="DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList;

new DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference;

new DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">externalIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIpv6`<sup>Required</sup> <a name="externalIpv6" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```java
public java.lang.String getExternalIpv6();
```

- *Type:* java.lang.String

---

##### `externalIpv6PrefixLength`<sup>Required</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```java
public java.lang.String getExternalIpv6PrefixLength();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig">DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfig</a>

---


### DataGoogleComputeInstanceNetworkInterfaceList <a name="DataGoogleComputeInstanceNetworkInterfaceList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceList;

new DataGoogleComputeInstanceNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.get"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceNetworkInterfaceOutputReference <a name="DataGoogleComputeInstanceNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkInterfaceOutputReference;

new DataGoogleComputeInstanceNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList">DataGoogleComputeInstanceNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRange">aliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList">DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIp">networkIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.nicType">nicType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCount">queueCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProject">subnetworkProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface">DataGoogleComputeInstanceNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.accessConfig"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceAccessConfigList getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAccessConfigList">DataGoogleComputeInstanceNetworkInterfaceAccessConfigList</a>

---

##### `aliasIpRange`<sup>Required</sup> <a name="aliasIpRange" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList getAliasIpRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList">DataGoogleComputeInstanceNetworkInterfaceAliasIpRangeList</a>

---

##### `internalIpv6PrefixLength`<sup>Required</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```java
public java.lang.Number getInternalIpv6PrefixLength();
```

- *Type:* java.lang.Number

---

##### `ipv6AccessConfig`<sup>Required</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```java
public DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList getIpv6AccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeInstanceNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `networkIp`<sup>Required</sup> <a name="networkIp" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.networkIp"></a>

```java
public java.lang.String getNetworkIp();
```

- *Type:* java.lang.String

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.queueCount"></a>

```java
public java.lang.Number getQueueCount();
```

- *Type:* java.lang.Number

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `subnetworkProject`<sup>Required</sup> <a name="subnetworkProject" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```java
public java.lang.String getSubnetworkProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceNetworkInterface getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkInterface">DataGoogleComputeInstanceNetworkInterface</a>

---


### DataGoogleComputeInstanceNetworkPerformanceConfigList <a name="DataGoogleComputeInstanceNetworkPerformanceConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkPerformanceConfigList;

new DataGoogleComputeInstanceNetworkPerformanceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.get"></a>

```java
public DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference <a name="DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference;

new DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig">DataGoogleComputeInstanceNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```java
public java.lang.String getTotalEgressBandwidthTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceNetworkPerformanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceNetworkPerformanceConfig">DataGoogleComputeInstanceNetworkPerformanceConfig</a>

---


### DataGoogleComputeInstanceParamsList <a name="DataGoogleComputeInstanceParamsList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceParamsList;

new DataGoogleComputeInstanceParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.get"></a>

```java
public DataGoogleComputeInstanceParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceParamsOutputReference <a name="DataGoogleComputeInstanceParamsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceParamsOutputReference;

new DataGoogleComputeInstanceParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParams">DataGoogleComputeInstanceParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.resourceManagerTags"></a>

```java
public StringMap getResourceManagerTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParamsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceParams">DataGoogleComputeInstanceParams</a>

---


### DataGoogleComputeInstanceReservationAffinityList <a name="DataGoogleComputeInstanceReservationAffinityList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceReservationAffinityList;

new DataGoogleComputeInstanceReservationAffinityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.get"></a>

```java
public DataGoogleComputeInstanceReservationAffinityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceReservationAffinityOutputReference <a name="DataGoogleComputeInstanceReservationAffinityOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceReservationAffinityOutputReference;

new DataGoogleComputeInstanceReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList">DataGoogleComputeInstanceReservationAffinitySpecificReservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity">DataGoogleComputeInstanceReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.specificReservation"></a>

```java
public DataGoogleComputeInstanceReservationAffinitySpecificReservationList getSpecificReservation();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList">DataGoogleComputeInstanceReservationAffinitySpecificReservationList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinityOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinity">DataGoogleComputeInstanceReservationAffinity</a>

---


### DataGoogleComputeInstanceReservationAffinitySpecificReservationList <a name="DataGoogleComputeInstanceReservationAffinitySpecificReservationList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList;

new DataGoogleComputeInstanceReservationAffinitySpecificReservationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.get"></a>

```java
public DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference <a name="DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference;

new DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation">DataGoogleComputeInstanceReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceReservationAffinitySpecificReservation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceReservationAffinitySpecificReservation">DataGoogleComputeInstanceReservationAffinitySpecificReservation</a>

---


### DataGoogleComputeInstanceSchedulingGracefulShutdownList <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingGracefulShutdownList;

new DataGoogleComputeInstanceSchedulingGracefulShutdownList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.get"></a>

```java
public DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList;

new DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.get"></a>

```java
public DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference;

new DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration">DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration">DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDuration</a>

---


### DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference <a name="DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference;

new DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.maxDuration">maxDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList">DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown">DataGoogleComputeInstanceSchedulingGracefulShutdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maxDuration`<sup>Required</sup> <a name="maxDuration" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.maxDuration"></a>

```java
public DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList getMaxDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList">DataGoogleComputeInstanceSchedulingGracefulShutdownMaxDurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceSchedulingGracefulShutdown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdown">DataGoogleComputeInstanceSchedulingGracefulShutdown</a>

---


### DataGoogleComputeInstanceSchedulingList <a name="DataGoogleComputeInstanceSchedulingList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingList;

new DataGoogleComputeInstanceSchedulingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.get"></a>

```java
public DataGoogleComputeInstanceSchedulingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList <a name="DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList;

new DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```java
public DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference;

new DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeout</a>

---


### DataGoogleComputeInstanceSchedulingMaxRunDurationList <a name="DataGoogleComputeInstanceSchedulingMaxRunDurationList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingMaxRunDurationList;

new DataGoogleComputeInstanceSchedulingMaxRunDurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.get"></a>

```java
public DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference <a name="DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference;

new DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration">DataGoogleComputeInstanceSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceSchedulingMaxRunDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDuration">DataGoogleComputeInstanceSchedulingMaxRunDuration</a>

---


### DataGoogleComputeInstanceSchedulingNodeAffinitiesList <a name="DataGoogleComputeInstanceSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList;

new DataGoogleComputeInstanceSchedulingNodeAffinitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.get"></a>

```java
public DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference <a name="DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference;

new DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities">DataGoogleComputeInstanceSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceSchedulingNodeAffinities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinities">DataGoogleComputeInstanceSchedulingNodeAffinities</a>

---


### DataGoogleComputeInstanceSchedulingOnInstanceStopActionList <a name="DataGoogleComputeInstanceSchedulingOnInstanceStopActionList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList;

new DataGoogleComputeInstanceSchedulingOnInstanceStopActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.get"></a>

```java
public DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference <a name="DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference;

new DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discardLocalSsd</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction">DataGoogleComputeInstanceSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `discardLocalSsd`<sup>Required</sup> <a name="discardLocalSsd" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```java
public IResolvable getDiscardLocalSsd();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceSchedulingOnInstanceStopAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopAction">DataGoogleComputeInstanceSchedulingOnInstanceStopAction</a>

---


### DataGoogleComputeInstanceSchedulingOutputReference <a name="DataGoogleComputeInstanceSchedulingOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceSchedulingOutputReference;

new DataGoogleComputeInstanceSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.automaticRestart">automaticRestart</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.gracefulShutdown">gracefulShutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList">DataGoogleComputeInstanceSchedulingGracefulShutdownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSeconds">hostErrorTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList">DataGoogleComputeInstanceSchedulingMaxRunDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.minNodeCpus">minNodeCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.nodeAffinities">nodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList">DataGoogleComputeInstanceSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenance">onHostMaintenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList">DataGoogleComputeInstanceSchedulingOnInstanceStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.terminationTime">terminationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling">DataGoogleComputeInstanceScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticRestart`<sup>Required</sup> <a name="automaticRestart" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.automaticRestart"></a>

```java
public IResolvable getAutomaticRestart();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.availabilityDomain"></a>

```java
public java.lang.Number getAvailabilityDomain();
```

- *Type:* java.lang.Number

---

##### `gracefulShutdown`<sup>Required</sup> <a name="gracefulShutdown" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.gracefulShutdown"></a>

```java
public DataGoogleComputeInstanceSchedulingGracefulShutdownList getGracefulShutdown();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingGracefulShutdownList">DataGoogleComputeInstanceSchedulingGracefulShutdownList</a>

---

##### `hostErrorTimeoutSeconds`<sup>Required</sup> <a name="hostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```java
public java.lang.Number getHostErrorTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `instanceTerminationAction`<sup>Required</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.instanceTerminationAction"></a>

```java
public java.lang.String getInstanceTerminationAction();
```

- *Type:* java.lang.String

---

##### `localSsdRecoveryTimeout`<sup>Required</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```java
public DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList getLocalSsdRecoveryTimeout();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeInstanceSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

---

##### `maxRunDuration`<sup>Required</sup> <a name="maxRunDuration" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.maxRunDuration"></a>

```java
public DataGoogleComputeInstanceSchedulingMaxRunDurationList getMaxRunDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingMaxRunDurationList">DataGoogleComputeInstanceSchedulingMaxRunDurationList</a>

---

##### `minNodeCpus`<sup>Required</sup> <a name="minNodeCpus" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.minNodeCpus"></a>

```java
public java.lang.Number getMinNodeCpus();
```

- *Type:* java.lang.Number

---

##### `nodeAffinities`<sup>Required</sup> <a name="nodeAffinities" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.nodeAffinities"></a>

```java
public DataGoogleComputeInstanceSchedulingNodeAffinitiesList getNodeAffinities();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingNodeAffinitiesList">DataGoogleComputeInstanceSchedulingNodeAffinitiesList</a>

---

##### `onHostMaintenance`<sup>Required</sup> <a name="onHostMaintenance" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.onHostMaintenance"></a>

```java
public java.lang.String getOnHostMaintenance();
```

- *Type:* java.lang.String

---

##### `onInstanceStopAction`<sup>Required</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.onInstanceStopAction"></a>

```java
public DataGoogleComputeInstanceSchedulingOnInstanceStopActionList getOnInstanceStopAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOnInstanceStopActionList">DataGoogleComputeInstanceSchedulingOnInstanceStopActionList</a>

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.preemptible"></a>

```java
public IResolvable getPreemptible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

---

##### `terminationTime`<sup>Required</sup> <a name="terminationTime" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.terminationTime"></a>

```java
public java.lang.String getTerminationTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceSchedulingOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceScheduling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScheduling">DataGoogleComputeInstanceScheduling</a>

---


### DataGoogleComputeInstanceScratchDiskList <a name="DataGoogleComputeInstanceScratchDiskList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceScratchDiskList;

new DataGoogleComputeInstanceScratchDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.get"></a>

```java
public DataGoogleComputeInstanceScratchDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceScratchDiskOutputReference <a name="DataGoogleComputeInstanceScratchDiskOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceScratchDiskOutputReference;

new DataGoogleComputeInstanceScratchDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk">DataGoogleComputeInstanceScratchDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDiskOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceScratchDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceScratchDisk">DataGoogleComputeInstanceScratchDisk</a>

---


### DataGoogleComputeInstanceServiceAccountList <a name="DataGoogleComputeInstanceServiceAccountList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceServiceAccountList;

new DataGoogleComputeInstanceServiceAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.get"></a>

```java
public DataGoogleComputeInstanceServiceAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceServiceAccountOutputReference <a name="DataGoogleComputeInstanceServiceAccountOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceServiceAccountOutputReference;

new DataGoogleComputeInstanceServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount">DataGoogleComputeInstanceServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccountOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceServiceAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceServiceAccount">DataGoogleComputeInstanceServiceAccount</a>

---


### DataGoogleComputeInstanceShieldedInstanceConfigList <a name="DataGoogleComputeInstanceShieldedInstanceConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceShieldedInstanceConfigList;

new DataGoogleComputeInstanceShieldedInstanceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.get"></a>

```java
public DataGoogleComputeInstanceShieldedInstanceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceShieldedInstanceConfigOutputReference <a name="DataGoogleComputeInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_instance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference;

new DataGoogleComputeInstanceShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig">DataGoogleComputeInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public IResolvable getEnableIntegrityMonitoring();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public IResolvable getEnableSecureBoot();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public IResolvable getEnableVtpm();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstance.DataGoogleComputeInstanceShieldedInstanceConfig">DataGoogleComputeInstanceShieldedInstanceConfig</a>

---



