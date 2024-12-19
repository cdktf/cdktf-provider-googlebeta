# `googleDatabaseMigrationServicePrivateConnection` Submodule <a name="`googleDatabaseMigrationServicePrivateConnection` Submodule" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatabaseMigrationServicePrivateConnection <a name="GoogleDatabaseMigrationServicePrivateConnection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection google_database_migration_service_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection(scope: Construct, id: string, config: GoogleDatabaseMigrationServicePrivateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig">GoogleDatabaseMigrationServicePrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig">GoogleDatabaseMigrationServicePrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig">putVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDatabaseMigrationServicePrivateConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

---

##### `putVpcPeeringConfig` <a name="putVpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig"></a>

```typescript
public putVpcPeeringConfig(value: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDatabaseMigrationServicePrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDatabaseMigrationServicePrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatabaseMigrationServicePrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList">GoogleDatabaseMigrationServicePrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput">privateConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput">vpcPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionId">privateConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.error"></a>

```typescript
public readonly error: GoogleDatabaseMigrationServicePrivateConnectionErrorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList">GoogleDatabaseMigrationServicePrivateConnectionErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a>

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig"></a>

```typescript
public readonly vpcPeeringConfig: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `privateConnectionIdInput`<sup>Optional</sup> <a name="privateConnectionIdInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput"></a>

```typescript
public readonly privateConnectionIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDatabaseMigrationServicePrivateConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

---

##### `vpcPeeringConfigInput`<sup>Optional</sup> <a name="vpcPeeringConfigInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput"></a>

```typescript
public readonly vpcPeeringConfigInput: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionId"></a>

```typescript
public readonly privateConnectionId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatabaseMigrationServicePrivateConnectionConfig <a name="GoogleDatabaseMigrationServicePrivateConnectionConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServicePrivateConnectionConfig: googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.location">location</a></code> | <code>string</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId">privateConnectionId</a></code> | <code>string</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#location GoogleDatabaseMigrationServicePrivateConnection#location}

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId"></a>

```typescript
public readonly privateConnectionId: string;
```

- *Type:* string

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#private_connection_id GoogleDatabaseMigrationServicePrivateConnection#private_connection_id}

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig"></a>

```typescript
public readonly vpcPeeringConfig: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#vpc_peering_config GoogleDatabaseMigrationServicePrivateConnection#vpc_peering_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#display_name GoogleDatabaseMigrationServicePrivateConnection#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#labels GoogleDatabaseMigrationServicePrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatabaseMigrationServicePrivateConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#timeouts GoogleDatabaseMigrationServicePrivateConnection#timeouts}

---

### GoogleDatabaseMigrationServicePrivateConnectionError <a name="GoogleDatabaseMigrationServicePrivateConnectionError" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServicePrivateConnectionError: googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError = { ... }
```


### GoogleDatabaseMigrationServicePrivateConnectionTimeouts <a name="GoogleDatabaseMigrationServicePrivateConnectionTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServicePrivateConnectionTimeouts: googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#create GoogleDatabaseMigrationServicePrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#delete GoogleDatabaseMigrationServicePrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#update GoogleDatabaseMigrationServicePrivateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#create GoogleDatabaseMigrationServicePrivateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#delete GoogleDatabaseMigrationServicePrivateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#update GoogleDatabaseMigrationServicePrivateConnection#update}.

---

### GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig <a name="GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

const googleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig: googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet">subnet</a></code> | <code>string</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName">vpcName</a></code> | <code>string</code> | Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#subnet GoogleDatabaseMigrationServicePrivateConnection#subnet}

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_database_migration_service_private_connection#vpc_name GoogleDatabaseMigrationServicePrivateConnection#vpc_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatabaseMigrationServicePrivateConnectionErrorList <a name="GoogleDatabaseMigrationServicePrivateConnectionErrorList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get"></a>

```typescript
public get(index: number): GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError">GoogleDatabaseMigrationServicePrivateConnectionError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatabaseMigrationServicePrivateConnectionError;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError">GoogleDatabaseMigrationServicePrivateConnectionError</a>

---


### GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDatabaseMigrationServicePrivateConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

---


### GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```typescript
import { googleDatabaseMigrationServicePrivateConnection } from '@cdktf/provider-google-beta'

new googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput">vpcNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `vpcNameInput`<sup>Optional</sup> <a name="vpcNameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput"></a>

```typescript
public readonly vpcNameInput: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---



