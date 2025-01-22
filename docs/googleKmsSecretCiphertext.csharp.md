# `googleKmsSecretCiphertext` Submodule <a name="`googleKmsSecretCiphertext` Submodule" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsSecretCiphertext <a name="GoogleKmsSecretCiphertext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext google_kms_secret_ciphertext}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsSecretCiphertext(Construct Scope, string Id, GoogleKmsSecretCiphertextConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig">GoogleKmsSecretCiphertextConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig">GoogleKmsSecretCiphertextConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetAdditionalAuthenticatedData">ResetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleKmsSecretCiphertextTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

---

##### `ResetAdditionalAuthenticatedData` <a name="ResetAdditionalAuthenticatedData" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetAdditionalAuthenticatedData"></a>

```csharp
private void ResetAdditionalAuthenticatedData()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleKmsSecretCiphertext.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleKmsSecretCiphertext.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleKmsSecretCiphertext.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleKmsSecretCiphertext.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsSecretCiphertext to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsSecretCiphertext that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsSecretCiphertext to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.ciphertext">Ciphertext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference">GoogleKmsSecretCiphertextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedDataInput">AdditionalAuthenticatedDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKeyInput">CryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedData">AdditionalAuthenticatedData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKey">CryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.ciphertext"></a>

```csharp
public string Ciphertext { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeouts"></a>

```csharp
public GoogleKmsSecretCiphertextTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference">GoogleKmsSecretCiphertextTimeoutsOutputReference</a>

---

##### `AdditionalAuthenticatedDataInput`<sup>Optional</sup> <a name="AdditionalAuthenticatedDataInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedDataInput"></a>

```csharp
public string AdditionalAuthenticatedDataInput { get; }
```

- *Type:* string

---

##### `CryptoKeyInput`<sup>Optional</sup> <a name="CryptoKeyInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKeyInput"></a>

```csharp
public string CryptoKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdditionalAuthenticatedData`<sup>Required</sup> <a name="AdditionalAuthenticatedData" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedData"></a>

```csharp
public string AdditionalAuthenticatedData { get; }
```

- *Type:* string

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKey"></a>

```csharp
public string CryptoKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsSecretCiphertextConfig <a name="GoogleKmsSecretCiphertextConfig" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsSecretCiphertextConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CryptoKey,
    string Plaintext,
    string AdditionalAuthenticatedData = null,
    string Id = null,
    GoogleKmsSecretCiphertextTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.cryptoKey">CryptoKey</a></code> | <code>string</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.plaintext">Plaintext</a></code> | <code>string</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.additionalAuthenticatedData">AdditionalAuthenticatedData</a></code> | <code>string</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.cryptoKey"></a>

```csharp
public string CryptoKey { get; set; }
```

- *Type:* string

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#crypto_key GoogleKmsSecretCiphertext#crypto_key}

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#plaintext GoogleKmsSecretCiphertext#plaintext}

---

##### `AdditionalAuthenticatedData`<sup>Optional</sup> <a name="AdditionalAuthenticatedData" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.additionalAuthenticatedData"></a>

```csharp
public string AdditionalAuthenticatedData { get; set; }
```

- *Type:* string

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#additional_authenticated_data GoogleKmsSecretCiphertext#additional_authenticated_data}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.timeouts"></a>

```csharp
public GoogleKmsSecretCiphertextTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#timeouts GoogleKmsSecretCiphertext#timeouts}

---

### GoogleKmsSecretCiphertextTimeouts <a name="GoogleKmsSecretCiphertextTimeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsSecretCiphertextTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#create GoogleKmsSecretCiphertext#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#delete GoogleKmsSecretCiphertext#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#create GoogleKmsSecretCiphertext#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_kms_secret_ciphertext#delete GoogleKmsSecretCiphertext#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsSecretCiphertextTimeoutsOutputReference <a name="GoogleKmsSecretCiphertextTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleKmsSecretCiphertextTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



