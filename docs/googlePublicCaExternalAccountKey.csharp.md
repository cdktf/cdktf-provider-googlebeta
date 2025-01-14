# `googlePublicCaExternalAccountKey` Submodule <a name="`googlePublicCaExternalAccountKey` Submodule" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePublicCaExternalAccountKey <a name="GooglePublicCaExternalAccountKey" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key google_public_ca_external_account_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePublicCaExternalAccountKey(Construct Scope, string Id, GooglePublicCaExternalAccountKeyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig">GooglePublicCaExternalAccountKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig">GooglePublicCaExternalAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.putTimeouts"></a>

```csharp
private void PutTimeouts(GooglePublicCaExternalAccountKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts">GooglePublicCaExternalAccountKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePublicCaExternalAccountKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePublicCaExternalAccountKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePublicCaExternalAccountKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePublicCaExternalAccountKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePublicCaExternalAccountKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GooglePublicCaExternalAccountKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePublicCaExternalAccountKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePublicCaExternalAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GooglePublicCaExternalAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.b64MacKey">B64MacKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference">GooglePublicCaExternalAccountKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `B64MacKey`<sup>Required</sup> <a name="B64MacKey" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.b64MacKey"></a>

```csharp
public string B64MacKey { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.timeouts"></a>

```csharp
public GooglePublicCaExternalAccountKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference">GooglePublicCaExternalAccountKeyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePublicCaExternalAccountKeyConfig <a name="GooglePublicCaExternalAccountKeyConfig" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePublicCaExternalAccountKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Location = null,
    string Project = null,
    GooglePublicCaExternalAccountKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#id GooglePublicCaExternalAccountKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.location">Location</a></code> | <code>string</code> | Location for the externalAccountKey. Currently only 'global' is supported. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#project GooglePublicCaExternalAccountKey#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts">GooglePublicCaExternalAccountKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#id GooglePublicCaExternalAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location for the externalAccountKey. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#location GooglePublicCaExternalAccountKey#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#project GooglePublicCaExternalAccountKey#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyConfig.property.timeouts"></a>

```csharp
public GooglePublicCaExternalAccountKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts">GooglePublicCaExternalAccountKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#timeouts GooglePublicCaExternalAccountKey#timeouts}

---

### GooglePublicCaExternalAccountKeyTimeouts <a name="GooglePublicCaExternalAccountKeyTimeouts" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePublicCaExternalAccountKeyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#create GooglePublicCaExternalAccountKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#delete GooglePublicCaExternalAccountKey#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#create GooglePublicCaExternalAccountKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_public_ca_external_account_key#delete GooglePublicCaExternalAccountKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePublicCaExternalAccountKeyTimeoutsOutputReference <a name="GooglePublicCaExternalAccountKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePublicCaExternalAccountKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePublicCaExternalAccountKey.GooglePublicCaExternalAccountKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



