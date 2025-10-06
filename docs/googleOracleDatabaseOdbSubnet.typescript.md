# `googleOracleDatabaseOdbSubnet` Submodule <a name="`googleOracleDatabaseOdbSubnet` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseOdbSubnet <a name="GoogleOracleDatabaseOdbSubnet" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet google_oracle_database_odb_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer"></a>

```typescript
import { googleOracleDatabaseOdbSubnet } from '@cdktf/provider-google-beta'

new googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet(scope: Construct, id: string, config: GoogleOracleDatabaseOdbSubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig">GoogleOracleDatabaseOdbSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig">GoogleOracleDatabaseOdbSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleOracleDatabaseOdbSubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseOdbSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct"></a>

```typescript
import { googleOracleDatabaseOdbSubnet } from '@cdktf/provider-google-beta'

googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement"></a>

```typescript
import { googleOracleDatabaseOdbSubnet } from '@cdktf/provider-google-beta'

googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource"></a>

```typescript
import { googleOracleDatabaseOdbSubnet } from '@cdktf/provider-google-beta'

googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport"></a>

```typescript
import { googleOracleDatabaseOdbSubnet } from '@cdktf/provider-google-beta'

googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleOracleDatabaseOdbSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseOdbSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseOdbSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseOdbSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference">GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRangeInput">cidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetworkInput">odbnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetIdInput">odbSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRange">cidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetwork">odbnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetId">odbSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference">GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference</a>

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRangeInput"></a>

```typescript
public readonly cidrRangeInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `odbnetworkInput`<sup>Optional</sup> <a name="odbnetworkInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetworkInput"></a>

```typescript
public readonly odbnetworkInput: string;
```

- *Type:* string

---

##### `odbSubnetIdInput`<sup>Optional</sup> <a name="odbSubnetIdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetIdInput"></a>

```typescript
public readonly odbSubnetIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleOracleDatabaseOdbSubnetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetwork"></a>

```typescript
public readonly odbnetwork: string;
```

- *Type:* string

---

##### `odbSubnetId`<sup>Required</sup> <a name="odbSubnetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetId"></a>

```typescript
public readonly odbSubnetId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseOdbSubnetConfig <a name="GoogleOracleDatabaseOdbSubnetConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.Initializer"></a>

```typescript
import { googleOracleDatabaseOdbSubnet } from '@cdktf/provider-google-beta'

const googleOracleDatabaseOdbSubnetConfig: googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.cidrRange">cidrRange</a></code> | <code>string</code> | The CIDR range of the subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbnetwork">odbnetwork</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbSubnetId">odbSubnetId</a></code> | <code>string</code> | The ID of the OdbSubnet to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.purpose">purpose</a></code> | <code>string</code> | Purpose of the subnet. Possible values: CLIENT_SUBNET BACKUP_SUBNET. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#id GoogleOracleDatabaseOdbSubnet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#project GoogleOracleDatabaseOdbSubnet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

The CIDR range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#cidr_range GoogleOracleDatabaseOdbSubnet#cidr_range}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#location GoogleOracleDatabaseOdbSubnet#location}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbnetwork"></a>

```typescript
public readonly odbnetwork: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#odbnetwork GoogleOracleDatabaseOdbSubnet#odbnetwork}

---

##### `odbSubnetId`<sup>Required</sup> <a name="odbSubnetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbSubnetId"></a>

```typescript
public readonly odbSubnetId: string;
```

- *Type:* string

The ID of the OdbSubnet to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#odb_subnet_id GoogleOracleDatabaseOdbSubnet#odb_subnet_id}

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

Purpose of the subnet. Possible values: CLIENT_SUBNET BACKUP_SUBNET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#purpose GoogleOracleDatabaseOdbSubnet#purpose}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#deletion_protection GoogleOracleDatabaseOdbSubnet#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#id GoogleOracleDatabaseOdbSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#labels GoogleOracleDatabaseOdbSubnet#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#project GoogleOracleDatabaseOdbSubnet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOracleDatabaseOdbSubnetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#timeouts GoogleOracleDatabaseOdbSubnet#timeouts}

---

### GoogleOracleDatabaseOdbSubnetTimeouts <a name="GoogleOracleDatabaseOdbSubnetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.Initializer"></a>

```typescript
import { googleOracleDatabaseOdbSubnet } from '@cdktf/provider-google-beta'

const googleOracleDatabaseOdbSubnetTimeouts: googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#create GoogleOracleDatabaseOdbSubnet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#delete GoogleOracleDatabaseOdbSubnet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#update GoogleOracleDatabaseOdbSubnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#create GoogleOracleDatabaseOdbSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#delete GoogleOracleDatabaseOdbSubnet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#update GoogleOracleDatabaseOdbSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference <a name="GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseOdbSubnet } from '@cdktf/provider-google-beta'

new googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOracleDatabaseOdbSubnetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

---



