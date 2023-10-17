# `data_google_vmwareengine_private_cloud`

Refer to the Terraform Registory for docs: [`data_google_vmwareengine_private_cloud`](https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud).

# `dataGoogleVmwareenginePrivateCloud` Submodule <a name="`dataGoogleVmwareenginePrivateCloud` Submodule" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareenginePrivateCloud <a name="DataGoogleVmwareenginePrivateCloud" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud google_vmwareengine_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloud;

DataGoogleVmwareenginePrivateCloud.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#id DataGoogleVmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#project DataGoogleVmwareenginePrivateCloud#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#location DataGoogleVmwareenginePrivateCloud#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#name DataGoogleVmwareenginePrivateCloud#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#id DataGoogleVmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#project DataGoogleVmwareenginePrivateCloud#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloud;

DataGoogleVmwareenginePrivateCloud.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloud;

DataGoogleVmwareenginePrivateCloud.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloud;

DataGoogleVmwareenginePrivateCloud.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloud;

DataGoogleVmwareenginePrivateCloud.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleVmwareenginePrivateCloud.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleVmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleVmwareenginePrivateCloud to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleVmwareenginePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareenginePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.hcx">hcx</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList">DataGoogleVmwareenginePrivateCloudHcxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.managementCluster">managementCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList">DataGoogleVmwareenginePrivateCloudManagementClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList">DataGoogleVmwareenginePrivateCloudNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nsx">nsx</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList">DataGoogleVmwareenginePrivateCloudNsxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList">DataGoogleVmwareenginePrivateCloudVcenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hcx`<sup>Required</sup> <a name="hcx" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.hcx"></a>

```java
public DataGoogleVmwareenginePrivateCloudHcxList getHcx();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList">DataGoogleVmwareenginePrivateCloudHcxList</a>

---

##### `managementCluster`<sup>Required</sup> <a name="managementCluster" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.managementCluster"></a>

```java
public DataGoogleVmwareenginePrivateCloudManagementClusterList getManagementCluster();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList">DataGoogleVmwareenginePrivateCloudManagementClusterList</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.networkConfig"></a>

```java
public DataGoogleVmwareenginePrivateCloudNetworkConfigList getNetworkConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList">DataGoogleVmwareenginePrivateCloudNetworkConfigList</a>

---

##### `nsx`<sup>Required</sup> <a name="nsx" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nsx"></a>

```java
public DataGoogleVmwareenginePrivateCloudNsxList getNsx();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList">DataGoogleVmwareenginePrivateCloudNsxList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.vcenter"></a>

```java
public DataGoogleVmwareenginePrivateCloudVcenterList getVcenter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList">DataGoogleVmwareenginePrivateCloudVcenterList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloud.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareenginePrivateCloudConfig <a name="DataGoogleVmwareenginePrivateCloudConfig" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudConfig;

DataGoogleVmwareenginePrivateCloudConfig.builder()
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
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#id DataGoogleVmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#project DataGoogleVmwareenginePrivateCloud#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#location DataGoogleVmwareenginePrivateCloud#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#name DataGoogleVmwareenginePrivateCloud#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#id DataGoogleVmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_vmwareengine_private_cloud#project DataGoogleVmwareenginePrivateCloud#project}.

---

### DataGoogleVmwareenginePrivateCloudHcx <a name="DataGoogleVmwareenginePrivateCloudHcx" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudHcx;

DataGoogleVmwareenginePrivateCloudHcx.builder()
    .build();
```


### DataGoogleVmwareenginePrivateCloudManagementCluster <a name="DataGoogleVmwareenginePrivateCloudManagementCluster" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudManagementCluster;

DataGoogleVmwareenginePrivateCloudManagementCluster.builder()
    .build();
```


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs;

DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs.builder()
    .build();
```


### DataGoogleVmwareenginePrivateCloudNetworkConfig <a name="DataGoogleVmwareenginePrivateCloudNetworkConfig" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudNetworkConfig;

DataGoogleVmwareenginePrivateCloudNetworkConfig.builder()
    .build();
```


### DataGoogleVmwareenginePrivateCloudNsx <a name="DataGoogleVmwareenginePrivateCloudNsx" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudNsx;

DataGoogleVmwareenginePrivateCloudNsx.builder()
    .build();
```


### DataGoogleVmwareenginePrivateCloudVcenter <a name="DataGoogleVmwareenginePrivateCloudVcenter" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudVcenter;

DataGoogleVmwareenginePrivateCloudVcenter.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareenginePrivateCloudHcxList <a name="DataGoogleVmwareenginePrivateCloudHcxList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudHcxList;

new DataGoogleVmwareenginePrivateCloudHcxList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get"></a>

```java
public DataGoogleVmwareenginePrivateCloudHcxOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareenginePrivateCloudHcxOutputReference <a name="DataGoogleVmwareenginePrivateCloudHcxOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference;

new DataGoogleVmwareenginePrivateCloudHcxOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp">internalIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx">DataGoogleVmwareenginePrivateCloudHcx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalIp"></a>

```java
public java.lang.String getInternalIp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcxOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareenginePrivateCloudHcx getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudHcx">DataGoogleVmwareenginePrivateCloudHcx</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudManagementClusterList;

new DataGoogleVmwareenginePrivateCloudManagementClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get"></a>

```java
public DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList;

new DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get"></a>

```java
public DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference;

new DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount">customCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCoreCount`<sup>Required</sup> <a name="customCoreCount" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```java
public java.lang.Number getCustomCoreCount();
```

- *Type:* java.lang.Number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>

---


### DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference <a name="DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference;

new DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs">nodeTypeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster">DataGoogleVmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `nodeTypeConfigs`<sup>Required</sup> <a name="nodeTypeConfigs" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs"></a>

```java
public DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList getNodeTypeConfigs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">DataGoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareenginePrivateCloudManagementCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudManagementCluster">DataGoogleVmwareenginePrivateCloudManagementCluster</a>

---


### DataGoogleVmwareenginePrivateCloudNetworkConfigList <a name="DataGoogleVmwareenginePrivateCloudNetworkConfigList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList;

new DataGoogleVmwareenginePrivateCloudNetworkConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get"></a>

```java
public DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference <a name="DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference;

new DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr">managementCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion">managementIpAddressLayoutVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig">DataGoogleVmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managementCidr`<sup>Required</sup> <a name="managementCidr" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr"></a>

```java
public java.lang.String getManagementCidr();
```

- *Type:* java.lang.String

---

##### `managementIpAddressLayoutVersion`<sup>Required</sup> <a name="managementIpAddressLayoutVersion" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion"></a>

```java
public java.lang.Number getManagementIpAddressLayoutVersion();
```

- *Type:* java.lang.Number

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork"></a>

```java
public java.lang.String getVmwareEngineNetwork();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical"></a>

```java
public java.lang.String getVmwareEngineNetworkCanonical();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareenginePrivateCloudNetworkConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNetworkConfig">DataGoogleVmwareenginePrivateCloudNetworkConfig</a>

---


### DataGoogleVmwareenginePrivateCloudNsxList <a name="DataGoogleVmwareenginePrivateCloudNsxList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudNsxList;

new DataGoogleVmwareenginePrivateCloudNsxList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get"></a>

```java
public DataGoogleVmwareenginePrivateCloudNsxOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareenginePrivateCloudNsxOutputReference <a name="DataGoogleVmwareenginePrivateCloudNsxOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference;

new DataGoogleVmwareenginePrivateCloudNsxOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp">internalIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx">DataGoogleVmwareenginePrivateCloudNsx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalIp"></a>

```java
public java.lang.String getInternalIp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsxOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareenginePrivateCloudNsx getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudNsx">DataGoogleVmwareenginePrivateCloudNsx</a>

---


### DataGoogleVmwareenginePrivateCloudVcenterList <a name="DataGoogleVmwareenginePrivateCloudVcenterList" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudVcenterList;

new DataGoogleVmwareenginePrivateCloudVcenterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get"></a>

```java
public DataGoogleVmwareenginePrivateCloudVcenterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleVmwareenginePrivateCloudVcenterOutputReference <a name="DataGoogleVmwareenginePrivateCloudVcenterOutputReference" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_vmwareengine_private_cloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference;

new DataGoogleVmwareenginePrivateCloudVcenterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp">internalIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter">DataGoogleVmwareenginePrivateCloudVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalIp"></a>

```java
public java.lang.String getInternalIp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenterOutputReference.property.internalValue"></a>

```java
public DataGoogleVmwareenginePrivateCloudVcenter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVmwareenginePrivateCloud.DataGoogleVmwareenginePrivateCloudVcenter">DataGoogleVmwareenginePrivateCloudVcenter</a>

---



