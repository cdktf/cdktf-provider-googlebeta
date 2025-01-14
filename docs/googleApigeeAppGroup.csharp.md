# `googleApigeeAppGroup` Submodule <a name="`googleApigeeAppGroup` Submodule" id="@cdktf/provider-google-beta.googleApigeeAppGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeAppGroup <a name="GoogleApigeeAppGroup" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group google_apigee_app_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeAppGroup(Construct Scope, string Id, GoogleApigeeAppGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig">GoogleApigeeAppGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig">GoogleApigeeAppGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetChannelUri">ResetChannelUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.putAttributes"></a>

```csharp
private void PutAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.putAttributes.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeAppGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts">GoogleApigeeAppGroupTimeouts</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetChannelId"></a>

```csharp
private void ResetChannelId()
```

##### `ResetChannelUri` <a name="ResetChannelUri" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetChannelUri"></a>

```csharp
private void ResetChannelUri()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeAppGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeAppGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeAppGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeAppGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeAppGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApigeeAppGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeAppGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeAppGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeAppGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.appGroupId">AppGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList">GoogleApigeeAppGroupAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.lastModifiedAt">LastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference">GoogleApigeeAppGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.attributesInput">AttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.channelUriInput">ChannelUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.channelUri">ChannelUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppGroupId`<sup>Required</sup> <a name="AppGroupId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.appGroupId"></a>

```csharp
public string AppGroupId { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.attributes"></a>

```csharp
public GoogleApigeeAppGroupAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList">GoogleApigeeAppGroupAttributesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.lastModifiedAt"></a>

```csharp
public string LastModifiedAt { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.timeouts"></a>

```csharp
public GoogleApigeeAppGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference">GoogleApigeeAppGroupTimeoutsOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.attributesInput"></a>

```csharp
public object AttributesInput { get; }
```

- *Type:* object

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `ChannelUriInput`<sup>Optional</sup> <a name="ChannelUriInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.channelUriInput"></a>

```csharp
public string ChannelUriInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `ChannelUri`<sup>Required</sup> <a name="ChannelUri" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.channelUri"></a>

```csharp
public string ChannelUri { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeAppGroupAttributes <a name="GoogleApigeeAppGroupAttributes" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeAppGroupAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributes.property.name">Name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributes.property.value">Value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#name GoogleApigeeAppGroup#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#value GoogleApigeeAppGroup#value}

---

### GoogleApigeeAppGroupConfig <a name="GoogleApigeeAppGroupConfig" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeAppGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string OrgId,
    object Attributes = null,
    string ChannelId = null,
    string ChannelUri = null,
    string DisplayName = null,
    string Id = null,
    string Status = null,
    GoogleApigeeAppGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._-$ %. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.orgId">OrgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee app group, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.attributes">Attributes</a></code> | <code>object</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.channelId">ChannelId</a></code> | <code>string</code> | Channel identifier identifies the owner maintaining this grouping. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.channelUri">ChannelUri</a></code> | <code>string</code> | A reference to the associated storefront/marketplace. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | App group name displayed in the UI. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#id GoogleApigeeAppGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.status">Status</a></code> | <code>string</code> | Valid values are active or inactive. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts">GoogleApigeeAppGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._-$ %.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#name GoogleApigeeAppGroup#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The Apigee Organization associated with the Apigee app group, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#org_id GoogleApigeeAppGroup#org_id}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.attributes"></a>

```csharp
public object Attributes { get; set; }
```

- *Type:* object

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#attributes GoogleApigeeAppGroup#attributes}

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

Channel identifier identifies the owner maintaining this grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#channel_id GoogleApigeeAppGroup#channel_id}

---

##### `ChannelUri`<sup>Optional</sup> <a name="ChannelUri" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.channelUri"></a>

```csharp
public string ChannelUri { get; set; }
```

- *Type:* string

A reference to the associated storefront/marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#channel_uri GoogleApigeeAppGroup#channel_uri}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

App group name displayed in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#display_name GoogleApigeeAppGroup#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#id GoogleApigeeAppGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Valid values are active or inactive.

Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as active or inactive. Possible values: ["active", "inactive"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#status GoogleApigeeAppGroup#status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupConfig.property.timeouts"></a>

```csharp
public GoogleApigeeAppGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts">GoogleApigeeAppGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#timeouts GoogleApigeeAppGroup#timeouts}

---

### GoogleApigeeAppGroupTimeouts <a name="GoogleApigeeAppGroupTimeouts" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeAppGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#create GoogleApigeeAppGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#delete GoogleApigeeAppGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#update GoogleApigeeAppGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#create GoogleApigeeAppGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#delete GoogleApigeeAppGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_app_group#update GoogleApigeeAppGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeAppGroupAttributesList <a name="GoogleApigeeAppGroupAttributesList" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeAppGroupAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.get"></a>

```csharp
private GoogleApigeeAppGroupAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApigeeAppGroupAttributesOutputReference <a name="GoogleApigeeAppGroupAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeAppGroupAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApigeeAppGroupTimeoutsOutputReference <a name="GoogleApigeeAppGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeAppGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeAppGroup.GoogleApigeeAppGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



