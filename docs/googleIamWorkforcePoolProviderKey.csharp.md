# `googleIamWorkforcePoolProviderKey` Submodule <a name="`googleIamWorkforcePoolProviderKey` Submodule" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProviderKey <a name="GoogleIamWorkforcePoolProviderKey" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key google_iam_workforce_pool_provider_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkforcePoolProviderKey(Construct Scope, string Id, GoogleIamWorkforcePoolProviderKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig">GoogleIamWorkforcePoolProviderKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig">GoogleIamWorkforcePoolProviderKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData">PutKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyData` <a name="PutKeyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData"></a>

```csharp
private void PutKeyData(GoogleIamWorkforcePoolProviderKeyKeyData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamWorkforcePoolProviderKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkforcePoolProviderKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkforcePoolProviderKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkforcePoolProviderKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamWorkforcePoolProviderKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkforcePoolProviderKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkforcePoolProviderKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProviderKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyData">KeyData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference">GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference">GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyDataInput">KeyDataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerIdInput">ProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.useInput">UseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.use">Use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `KeyData`<sup>Required</sup> <a name="KeyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyData"></a>

```csharp
public GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference KeyData { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference">GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeouts"></a>

```csharp
public GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference">GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyDataInput`<sup>Optional</sup> <a name="KeyDataInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyDataInput"></a>

```csharp
public GoogleIamWorkforcePoolProviderKeyKeyData KeyDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerIdInput"></a>

```csharp
public string ProviderIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseInput`<sup>Optional</sup> <a name="UseInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.useInput"></a>

```csharp
public string UseInput { get; }
```

- *Type:* string

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolIdInput"></a>

```csharp
public string WorkforcePoolIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.use"></a>

```csharp
public string Use { get; }
```

- *Type:* string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderKeyConfig <a name="GoogleIamWorkforcePoolProviderKeyConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkforcePoolProviderKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleIamWorkforcePoolProviderKeyKeyData KeyData,
    string KeyId,
    string Location,
    string ProviderId,
    string Use,
    string WorkforcePoolId,
    string Id = null,
    GoogleIamWorkforcePoolProviderKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyData">KeyData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | key_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyId">KeyId</a></code> | <code>string</code> | The ID to use for the key, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.providerId">ProviderId</a></code> | <code>string</code> | The ID of the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.use">Use</a></code> | <code>string</code> | The purpose of the key. Possible values: ["ENCRYPTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | The ID of the workforce pool. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#id GoogleIamWorkforcePoolProviderKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyData`<sup>Required</sup> <a name="KeyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyData"></a>

```csharp
public GoogleIamWorkforcePoolProviderKeyKeyData KeyData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

key_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#key_data GoogleIamWorkforcePoolProviderKey#key_data}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ID to use for the key, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#key_id GoogleIamWorkforcePoolProviderKey#key_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#location GoogleIamWorkforcePoolProviderKey#location}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.providerId"></a>

```csharp
public string ProviderId { get; set; }
```

- *Type:* string

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#provider_id GoogleIamWorkforcePoolProviderKey#provider_id}

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.use"></a>

```csharp
public string Use { get; set; }
```

- *Type:* string

The purpose of the key. Possible values: ["ENCRYPTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#use GoogleIamWorkforcePoolProviderKey#use}

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; set; }
```

- *Type:* string

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#workforce_pool_id GoogleIamWorkforcePoolProviderKey#workforce_pool_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#id GoogleIamWorkforcePoolProviderKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.timeouts"></a>

```csharp
public GoogleIamWorkforcePoolProviderKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#timeouts GoogleIamWorkforcePoolProviderKey#timeouts}

---

### GoogleIamWorkforcePoolProviderKeyKeyData <a name="GoogleIamWorkforcePoolProviderKeyKeyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkforcePoolProviderKeyKeyData {
    string KeySpec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.property.keySpec">KeySpec</a></code> | <code>string</code> | The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"]. |

---

##### `KeySpec`<sup>Required</sup> <a name="KeySpec" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.property.keySpec"></a>

```csharp
public string KeySpec { get; set; }
```

- *Type:* string

The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#key_spec GoogleIamWorkforcePoolProviderKey#key_spec}

---

### GoogleIamWorkforcePoolProviderKeyTimeouts <a name="GoogleIamWorkforcePoolProviderKeyTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkforcePoolProviderKeyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#create GoogleIamWorkforcePoolProviderKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#delete GoogleIamWorkforcePoolProviderKey#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#create GoogleIamWorkforcePoolProviderKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_iam_workforce_pool_provider_key#delete GoogleIamWorkforcePoolProviderKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference <a name="GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime">NotAfterTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime">NotBeforeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput">KeySpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec">KeySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `NotAfterTime`<sup>Required</sup> <a name="NotAfterTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime"></a>

```csharp
public string NotAfterTime { get; }
```

- *Type:* string

---

##### `NotBeforeTime`<sup>Required</sup> <a name="NotBeforeTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime"></a>

```csharp
public string NotBeforeTime { get; }
```

- *Type:* string

---

##### `KeySpecInput`<sup>Optional</sup> <a name="KeySpecInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput"></a>

```csharp
public string KeySpecInput { get; }
```

- *Type:* string

---

##### `KeySpec`<sup>Required</sup> <a name="KeySpec" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec"></a>

```csharp
public string KeySpec { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue"></a>

```csharp
public GoogleIamWorkforcePoolProviderKeyKeyData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---


### GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



