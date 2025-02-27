# `googleApigeeEnvironmentKeyvaluemapsEntries` Submodule <a name="`googleApigeeEnvironmentKeyvaluemapsEntries` Submodule" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntries <a name="GoogleApigeeEnvironmentKeyvaluemapsEntries" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries google_apigee_environment_keyvaluemaps_entries}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeEnvironmentKeyvaluemapsEntries(Construct Scope, string Id, GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig">GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig">GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeEnvironmentKeyvaluemapsEntries.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeEnvironmentKeyvaluemapsEntries.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeEnvironmentKeyvaluemapsEntries.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeEnvironmentKeyvaluemapsEntries.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeEnvironmentKeyvaluemapsEntries to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeEnvironmentKeyvaluemapsEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentKeyvaluemapsEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapIdInput">EnvKeyvaluemapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapId">EnvKeyvaluemapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeouts"></a>

```csharp
public GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference</a>

---

##### `EnvKeyvaluemapIdInput`<sup>Optional</sup> <a name="EnvKeyvaluemapIdInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapIdInput"></a>

```csharp
public string EnvKeyvaluemapIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `EnvKeyvaluemapId`<sup>Required</sup> <a name="EnvKeyvaluemapId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapId"></a>

```csharp
public string EnvKeyvaluemapId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnvKeyvaluemapId,
    string Name,
    string Value,
    string Id = null,
    GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.envKeyvaluemapId">EnvKeyvaluemapId</a></code> | <code>string</code> | The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.name">Name</a></code> | <code>string</code> | Required. Resource URI that can be used to identify the scope of the key value map entries. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.value">Value</a></code> | <code>string</code> | Required. Data or payload that is being retrieved and associated with the unique key. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnvKeyvaluemapId`<sup>Required</sup> <a name="EnvKeyvaluemapId" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.envKeyvaluemapId"></a>

```csharp
public string EnvKeyvaluemapId { get; set; }
```

- *Type:* string

The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#env_keyvaluemap_id GoogleApigeeEnvironmentKeyvaluemapsEntries#env_keyvaluemap_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Required. Resource URI that can be used to identify the scope of the key value map entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#name GoogleApigeeEnvironmentKeyvaluemapsEntries#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Required. Data or payload that is being retrieved and associated with the unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#value GoogleApigeeEnvironmentKeyvaluemapsEntries#value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.timeouts"></a>

```csharp
public GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#timeouts GoogleApigeeEnvironmentKeyvaluemapsEntries#timeouts}

---

### GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#create GoogleApigeeEnvironmentKeyvaluemapsEntries#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#delete GoogleApigeeEnvironmentKeyvaluemapsEntries#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#create GoogleApigeeEnvironmentKeyvaluemapsEntries#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#delete GoogleApigeeEnvironmentKeyvaluemapsEntries#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



