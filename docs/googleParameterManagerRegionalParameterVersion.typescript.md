# `googleParameterManagerRegionalParameterVersion` Submodule <a name="`googleParameterManagerRegionalParameterVersion` Submodule" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParameterManagerRegionalParameterVersion <a name="GoogleParameterManagerRegionalParameterVersion" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version google_parameter_manager_regional_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameterVersion } from '@cdktf/provider-google-beta'

new googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion(scope: Construct, id: string, config: GoogleParameterManagerRegionalParameterVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig">GoogleParameterManagerRegionalParameterVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig">GoogleParameterManagerRegionalParameterVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleParameterManagerRegionalParameterVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts">GoogleParameterManagerRegionalParameterVersionTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleParameterManagerRegionalParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isConstruct"></a>

```typescript
import { googleParameterManagerRegionalParameterVersion } from '@cdktf/provider-google-beta'

googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isTerraformElement"></a>

```typescript
import { googleParameterManagerRegionalParameterVersion } from '@cdktf/provider-google-beta'

googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isTerraformResource"></a>

```typescript
import { googleParameterManagerRegionalParameterVersion } from '@cdktf/provider-google-beta'

googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.generateConfigForImport"></a>

```typescript
import { googleParameterManagerRegionalParameterVersion } from '@cdktf/provider-google-beta'

googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleParameterManagerRegionalParameterVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleParameterManagerRegionalParameterVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleParameterManagerRegionalParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleParameterManagerRegionalParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference">GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterDataInput">parameterDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterInput">parameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterVersionIdInput">parameterVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts">GoogleParameterManagerRegionalParameterVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterData">parameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterVersionId">parameterVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference">GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterDataInput`<sup>Optional</sup> <a name="parameterDataInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterDataInput"></a>

```typescript
public readonly parameterDataInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterInput"></a>

```typescript
public readonly parameterInput: string;
```

- *Type:* string

---

##### `parameterVersionIdInput`<sup>Optional</sup> <a name="parameterVersionIdInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterVersionIdInput"></a>

```typescript
public readonly parameterVersionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleParameterManagerRegionalParameterVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts">GoogleParameterManagerRegionalParameterVersionTimeouts</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `parameterData`<sup>Required</sup> <a name="parameterData" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterData"></a>

```typescript
public readonly parameterData: string;
```

- *Type:* string

---

##### `parameterVersionId`<sup>Required</sup> <a name="parameterVersionId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.parameterVersionId"></a>

```typescript
public readonly parameterVersionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParameterManagerRegionalParameterVersionConfig <a name="GoogleParameterManagerRegionalParameterVersionConfig" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameterVersion } from '@cdktf/provider-google-beta'

const googleParameterManagerRegionalParameterVersionConfig: googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.parameter">parameter</a></code> | <code>string</code> | Parameter Manager Regional Parameter resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.parameterData">parameterData</a></code> | <code>string</code> | The Regional Parameter data. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.parameterVersionId">parameterVersionId</a></code> | <code>string</code> | Version ID of the Regional Parameter Version Resource. This must be unique within the Regional Parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The current state of Regional Parameter Version. This field is only applicable for updating Regional Parameter Version. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#id GoogleParameterManagerRegionalParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts">GoogleParameterManagerRegionalParameterVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

Parameter Manager Regional Parameter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#parameter GoogleParameterManagerRegionalParameterVersion#parameter}

---

##### `parameterData`<sup>Required</sup> <a name="parameterData" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.parameterData"></a>

```typescript
public readonly parameterData: string;
```

- *Type:* string

The Regional Parameter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#parameter_data GoogleParameterManagerRegionalParameterVersion#parameter_data}

---

##### `parameterVersionId`<sup>Required</sup> <a name="parameterVersionId" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.parameterVersionId"></a>

```typescript
public readonly parameterVersionId: string;
```

- *Type:* string

Version ID of the Regional Parameter Version Resource. This must be unique within the Regional Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#parameter_version_id GoogleParameterManagerRegionalParameterVersion#parameter_version_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The current state of Regional Parameter Version. This field is only applicable for updating Regional Parameter Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#disabled GoogleParameterManagerRegionalParameterVersion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#id GoogleParameterManagerRegionalParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleParameterManagerRegionalParameterVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts">GoogleParameterManagerRegionalParameterVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#timeouts GoogleParameterManagerRegionalParameterVersion#timeouts}

---

### GoogleParameterManagerRegionalParameterVersionTimeouts <a name="GoogleParameterManagerRegionalParameterVersionTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameterVersion } from '@cdktf/provider-google-beta'

const googleParameterManagerRegionalParameterVersionTimeouts: googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#create GoogleParameterManagerRegionalParameterVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#delete GoogleParameterManagerRegionalParameterVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#update GoogleParameterManagerRegionalParameterVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#create GoogleParameterManagerRegionalParameterVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#delete GoogleParameterManagerRegionalParameterVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_parameter_manager_regional_parameter_version#update GoogleParameterManagerRegionalParameterVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference <a name="GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleParameterManagerRegionalParameterVersion } from '@cdktf/provider-google-beta'

new googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts">GoogleParameterManagerRegionalParameterVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleParameterManagerRegionalParameterVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleParameterManagerRegionalParameterVersion.GoogleParameterManagerRegionalParameterVersionTimeouts">GoogleParameterManagerRegionalParameterVersionTimeouts</a>

---



