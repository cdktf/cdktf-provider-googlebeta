# `googleActiveDirectoryPeering` Submodule <a name="`googleActiveDirectoryPeering` Submodule" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleActiveDirectoryPeering <a name="GoogleActiveDirectoryPeering" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering google_active_directory_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer"></a>

```typescript
import { googleActiveDirectoryPeering } from '@cdktf/provider-google-beta'

new googleActiveDirectoryPeering.GoogleActiveDirectoryPeering(scope: Construct, id: string, config: GoogleActiveDirectoryPeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig">GoogleActiveDirectoryPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig">GoogleActiveDirectoryPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetStatusMessage">resetStatusMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleActiveDirectoryPeeringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetStatusMessage` <a name="resetStatusMessage" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetStatusMessage"></a>

```typescript
public resetStatusMessage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleActiveDirectoryPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isConstruct"></a>

```typescript
import { googleActiveDirectoryPeering } from '@cdktf/provider-google-beta'

googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformElement"></a>

```typescript
import { googleActiveDirectoryPeering } from '@cdktf/provider-google-beta'

googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformResource"></a>

```typescript
import { googleActiveDirectoryPeering } from '@cdktf/provider-google-beta'

googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport"></a>

```typescript
import { googleActiveDirectoryPeering } from '@cdktf/provider-google-beta'

googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleActiveDirectoryPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleActiveDirectoryPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleActiveDirectoryPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleActiveDirectoryPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference">GoogleActiveDirectoryPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.authorizedNetworkInput">authorizedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.domainResourceInput">domainResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.peeringIdInput">peeringIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusMessageInput">statusMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.domainResource">domainResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.peeringId">peeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleActiveDirectoryPeeringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference">GoogleActiveDirectoryPeeringTimeoutsOutputReference</a>

---

##### `authorizedNetworkInput`<sup>Optional</sup> <a name="authorizedNetworkInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.authorizedNetworkInput"></a>

```typescript
public readonly authorizedNetworkInput: string;
```

- *Type:* string

---

##### `domainResourceInput`<sup>Optional</sup> <a name="domainResourceInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.domainResourceInput"></a>

```typescript
public readonly domainResourceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `peeringIdInput`<sup>Optional</sup> <a name="peeringIdInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.peeringIdInput"></a>

```typescript
public readonly peeringIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `statusMessageInput`<sup>Optional</sup> <a name="statusMessageInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusMessageInput"></a>

```typescript
public readonly statusMessageInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleActiveDirectoryPeeringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a>

---

##### `authorizedNetwork`<sup>Required</sup> <a name="authorizedNetwork" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

---

##### `domainResource`<sup>Required</sup> <a name="domainResource" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.domainResource"></a>

```typescript
public readonly domainResource: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleActiveDirectoryPeeringConfig <a name="GoogleActiveDirectoryPeeringConfig" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.Initializer"></a>

```typescript
import { googleActiveDirectoryPeering } from '@cdktf/provider-google-beta'

const googleActiveDirectoryPeeringConfig: googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | The full names of the Google Compute Engine networks to which the instance is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.domainResource">domainResource</a></code> | <code>string</code> | Full domain resource path for the Managed AD Domain involved in peering. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.peeringId">peeringId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#peering_id GoogleActiveDirectoryPeering#peering_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#id GoogleActiveDirectoryPeering#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#project GoogleActiveDirectoryPeering#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.status">status</a></code> | <code>string</code> | The current state of this Peering. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.statusMessage">statusMessage</a></code> | <code>string</code> | Additional information about the current status of this peering, if available. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizedNetwork`<sup>Required</sup> <a name="authorizedNetwork" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

The full names of the Google Compute Engine networks to which the instance is connected.

Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#authorized_network GoogleActiveDirectoryPeering#authorized_network}

---

##### `domainResource`<sup>Required</sup> <a name="domainResource" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.domainResource"></a>

```typescript
public readonly domainResource: string;
```

- *Type:* string

Full domain resource path for the Managed AD Domain involved in peering.

The resource path should be in the form projects/{projectId}/locations/global/domains/{domainName}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#domain_resource GoogleActiveDirectoryPeering#domain_resource}

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.peeringId"></a>

```typescript
public readonly peeringId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#peering_id GoogleActiveDirectoryPeering#peering_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#id GoogleActiveDirectoryPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#labels GoogleActiveDirectoryPeering#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#project GoogleActiveDirectoryPeering#project}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The current state of this Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#status GoogleActiveDirectoryPeering#status}

---

##### `statusMessage`<sup>Optional</sup> <a name="statusMessage" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

Additional information about the current status of this peering, if available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#status_message GoogleActiveDirectoryPeering#status_message}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleActiveDirectoryPeeringTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#timeouts GoogleActiveDirectoryPeering#timeouts}

---

### GoogleActiveDirectoryPeeringTimeouts <a name="GoogleActiveDirectoryPeeringTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.Initializer"></a>

```typescript
import { googleActiveDirectoryPeering } from '@cdktf/provider-google-beta'

const googleActiveDirectoryPeeringTimeouts: googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#create GoogleActiveDirectoryPeering#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#delete GoogleActiveDirectoryPeering#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#update GoogleActiveDirectoryPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#create GoogleActiveDirectoryPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#delete GoogleActiveDirectoryPeering#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_active_directory_peering#update GoogleActiveDirectoryPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleActiveDirectoryPeeringTimeoutsOutputReference <a name="GoogleActiveDirectoryPeeringTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleActiveDirectoryPeering } from '@cdktf/provider-google-beta'

new googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleActiveDirectoryPeeringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleActiveDirectoryPeering.GoogleActiveDirectoryPeeringTimeouts">GoogleActiveDirectoryPeeringTimeouts</a>

---



