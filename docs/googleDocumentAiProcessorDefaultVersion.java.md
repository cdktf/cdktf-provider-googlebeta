# `google_document_ai_processor_default_version`

Refer to the Terraform Registory for docs: [`google_document_ai_processor_default_version`](https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version).

# `googleDocumentAiProcessorDefaultVersion` Submodule <a name="`googleDocumentAiProcessorDefaultVersion` Submodule" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiProcessorDefaultVersion <a name="GoogleDocumentAiProcessorDefaultVersion" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version google_document_ai_processor_default_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_processor_default_version.GoogleDocumentAiProcessorDefaultVersion;

GoogleDocumentAiProcessorDefaultVersion.Builder.create(Construct scope, java.lang.String id)
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
    .processor(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleDocumentAiProcessorDefaultVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.processor">processor</a></code> | <code>java.lang.String</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The version to set. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.processor"></a>

- *Type:* java.lang.String

The processor to set the version on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#processor GoogleDocumentAiProcessorDefaultVersion#processor}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#version GoogleDocumentAiProcessorDefaultVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#timeouts GoogleDocumentAiProcessorDefaultVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts"></a>

```java
public void putTimeouts(GoogleDocumentAiProcessorDefaultVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_processor_default_version.GoogleDocumentAiProcessorDefaultVersion;

GoogleDocumentAiProcessorDefaultVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_processor_default_version.GoogleDocumentAiProcessorDefaultVersion;

GoogleDocumentAiProcessorDefaultVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_processor_default_version.GoogleDocumentAiProcessorDefaultVersion;

GoogleDocumentAiProcessorDefaultVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference">GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processorInput">processorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processor">processor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeouts"></a>

```java
public GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference">GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `processorInput`<sup>Optional</sup> <a name="processorInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processorInput"></a>

```java
public java.lang.String getProcessorInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.processor"></a>

```java
public java.lang.String getProcessor();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiProcessorDefaultVersionConfig <a name="GoogleDocumentAiProcessorDefaultVersionConfig" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_processor_default_version.GoogleDocumentAiProcessorDefaultVersionConfig;

GoogleDocumentAiProcessorDefaultVersionConfig.builder()
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
    .processor(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleDocumentAiProcessorDefaultVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.processor">processor</a></code> | <code>java.lang.String</code> | The processor to set the version on. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.version">version</a></code> | <code>java.lang.String</code> | The version to set. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.processor"></a>

```java
public java.lang.String getProcessor();
```

- *Type:* java.lang.String

The processor to set the version on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#processor GoogleDocumentAiProcessorDefaultVersion#processor}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version to set.

Using 'stable' or 'rc' will cause the API to return the latest version in that release channel.
Apply 'lifecycle.ignore_changes' to the 'version' field to suppress this diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#version GoogleDocumentAiProcessorDefaultVersion#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#id GoogleDocumentAiProcessorDefaultVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionConfig.property.timeouts"></a>

```java
public GoogleDocumentAiProcessorDefaultVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#timeouts GoogleDocumentAiProcessorDefaultVersion#timeouts}

---

### GoogleDocumentAiProcessorDefaultVersionTimeouts <a name="GoogleDocumentAiProcessorDefaultVersionTimeouts" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_processor_default_version.GoogleDocumentAiProcessorDefaultVersionTimeouts;

GoogleDocumentAiProcessorDefaultVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#create GoogleDocumentAiProcessorDefaultVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#delete GoogleDocumentAiProcessorDefaultVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#create GoogleDocumentAiProcessorDefaultVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_document_ai_processor_default_version#delete GoogleDocumentAiProcessorDefaultVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference <a name="GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_document_ai_processor_default_version.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference;

new GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDocumentAiProcessorDefaultVersion.GoogleDocumentAiProcessorDefaultVersionTimeouts">GoogleDocumentAiProcessorDefaultVersionTimeouts</a>

---



