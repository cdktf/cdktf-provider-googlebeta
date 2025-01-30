# `googleOracleDatabaseAutonomousDatabase` Submodule <a name="`googleOracleDatabaseAutonomousDatabase` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseAutonomousDatabase <a name="GoogleOracleDatabaseAutonomousDatabase" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database google_oracle_database_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase(scope: Construct, id: string, config: GoogleOracleDatabaseAutonomousDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig">GoogleOracleDatabaseAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig">GoogleOracleDatabaseAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putProperties"></a>

```typescript
public putProperties(value: GoogleOracleDatabaseAutonomousDatabaseProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleOracleDatabaseAutonomousDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isConstruct"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformElement"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformResource"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleOracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference">GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference">GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.properties"></a>

```typescript
public readonly properties: GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference">GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference">GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: GoogleOracleDatabaseAutonomousDatabaseProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleOracleDatabaseAutonomousDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseAutonomousDatabaseConfig <a name="GoogleOracleDatabaseAutonomousDatabaseConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabaseConfig: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | The ID of the Autonomous Database to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.cidr">cidr</a></code> | <code>string</code> | The subnet CIDR range for the Autonmous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.database">database</a></code> | <code>string</code> | The name of the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.network">network</a></code> | <code>string</code> | The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the Autonomous Database. The name does not have to be unique within your project. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#id GoogleOracleDatabaseAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels or tags associated with the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#project GoogleOracleDatabaseAutonomousDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

The ID of the Autonomous Database to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#autonomous_database_id GoogleOracleDatabaseAutonomousDatabase#autonomous_database_id}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The subnet CIDR range for the Autonmous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#cidr GoogleOracleDatabaseAutonomousDatabase#cidr}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The name of the Autonomous Database.

The database name must be unique in
the project. The name must begin with a letter and can
contain a maximum of 30 alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#database GoogleOracleDatabaseAutonomousDatabase#database}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#location GoogleOracleDatabaseAutonomousDatabase#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#network GoogleOracleDatabaseAutonomousDatabase#network}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.properties"></a>

```typescript
public readonly properties: GoogleOracleDatabaseAutonomousDatabaseProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#properties GoogleOracleDatabaseAutonomousDatabase#properties}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#admin_password GoogleOracleDatabaseAutonomousDatabase#admin_password}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#deletion_protection GoogleOracleDatabaseAutonomousDatabase#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the Autonomous Database. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#display_name GoogleOracleDatabaseAutonomousDatabase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#id GoogleOracleDatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels or tags associated with the Autonomous Database.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#labels GoogleOracleDatabaseAutonomousDatabase#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#project GoogleOracleDatabaseAutonomousDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleOracleDatabaseAutonomousDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#timeouts GoogleOracleDatabaseAutonomousDatabase#timeouts}

---

### GoogleOracleDatabaseAutonomousDatabaseProperties <a name="GoogleOracleDatabaseAutonomousDatabaseProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabaseProperties: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | Possible values:  DB_WORKLOAD_UNSPECIFIED OLTP DW AJD APEX. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.licenseType">licenseType</a></code> | <code>string</code> | The license type used for the Autonomous Database.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.backupRetentionPeriodDays">backupRetentionPeriodDays</a></code> | <code>number</code> | The retention period for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.characterSet">characterSet</a></code> | <code>string</code> | The character set for the Autonomous Database. The default is AL32UTF8. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.computeCount">computeCount</a></code> | <code>number</code> | The number of compute servers for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.customerContacts">customerContacts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]</code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>number</code> | The size of the data stored in the database, in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | The size of the data stored in the database, in terabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbEdition">dbEdition</a></code> | <code>string</code> | The edition of the Autonomous Databases.   Possible values:  DATABASE_EDITION_UNSPECIFIED STANDARD_EDITION ENTERPRISE_EDITION. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbVersion">dbVersion</a></code> | <code>string</code> | The Oracle Database version for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field indicates if auto scaling is enabled for the Autonomous Database CPU core count. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.isStorageAutoScalingEnabled">isStorageAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field indicates if auto scaling is enabled for the Autonomous Database storage. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.maintenanceScheduleType">maintenanceScheduleType</a></code> | <code>string</code> | The maintenance schedule of the Autonomous Database.   Possible values:  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED EARLY REGULAR. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field specifies if the Autonomous Database requires mTLS connections. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.nCharacterSet">nCharacterSet</a></code> | <code>string</code> | The national character set for the Autonomous Database. The default is AL16UTF16. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.operationsInsightsState">operationsInsightsState</a></code> | <code>string</code> | Possible values:  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED ENABLING ENABLED DISABLING NOT_ENABLED FAILED_ENABLING FAILED_DISABLING. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | The private endpoint IP address for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | The private endpoint label for the Autonomous Database. |

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

Possible values:  DB_WORKLOAD_UNSPECIFIED OLTP DW AJD APEX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#db_workload GoogleOracleDatabaseAutonomousDatabase#db_workload}

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

The license type used for the Autonomous Database.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#license_type GoogleOracleDatabaseAutonomousDatabase#license_type}

---

##### `backupRetentionPeriodDays`<sup>Optional</sup> <a name="backupRetentionPeriodDays" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.backupRetentionPeriodDays"></a>

```typescript
public readonly backupRetentionPeriodDays: number;
```

- *Type:* number

The retention period for the Autonomous Database.

This field is specified
in days, can range from 1 day to 60 days, and has a default value of
60 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#backup_retention_period_days GoogleOracleDatabaseAutonomousDatabase#backup_retention_period_days}

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

The character set for the Autonomous Database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#character_set GoogleOracleDatabaseAutonomousDatabase#character_set}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

The number of compute servers for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#compute_count GoogleOracleDatabaseAutonomousDatabase#compute_count}

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.customerContacts"></a>

```typescript
public readonly customerContacts: IResolvable | GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#customer_contacts GoogleOracleDatabaseAutonomousDatabase#customer_contacts}

---

##### `dataStorageSizeGb`<sup>Optional</sup> <a name="dataStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeGb"></a>

```typescript
public readonly dataStorageSizeGb: number;
```

- *Type:* number

The size of the data stored in the database, in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#data_storage_size_gb GoogleOracleDatabaseAutonomousDatabase#data_storage_size_gb}

---

##### `dataStorageSizeTb`<sup>Optional</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

The size of the data stored in the database, in terabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#data_storage_size_tb GoogleOracleDatabaseAutonomousDatabase#data_storage_size_tb}

---

##### `dbEdition`<sup>Optional</sup> <a name="dbEdition" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbEdition"></a>

```typescript
public readonly dbEdition: string;
```

- *Type:* string

The edition of the Autonomous Databases.   Possible values:  DATABASE_EDITION_UNSPECIFIED STANDARD_EDITION ENTERPRISE_EDITION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#db_edition GoogleOracleDatabaseAutonomousDatabase#db_edition}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

The Oracle Database version for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#db_version GoogleOracleDatabaseAutonomousDatabase#db_version}

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field indicates if auto scaling is enabled for the Autonomous Database CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#is_auto_scaling_enabled GoogleOracleDatabaseAutonomousDatabase#is_auto_scaling_enabled}

---

##### `isStorageAutoScalingEnabled`<sup>Optional</sup> <a name="isStorageAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.isStorageAutoScalingEnabled"></a>

```typescript
public readonly isStorageAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field indicates if auto scaling is enabled for the Autonomous Database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#is_storage_auto_scaling_enabled GoogleOracleDatabaseAutonomousDatabase#is_storage_auto_scaling_enabled}

---

##### `maintenanceScheduleType`<sup>Optional</sup> <a name="maintenanceScheduleType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.maintenanceScheduleType"></a>

```typescript
public readonly maintenanceScheduleType: string;
```

- *Type:* string

The maintenance schedule of the Autonomous Database.   Possible values:  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED EARLY REGULAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#maintenance_schedule_type GoogleOracleDatabaseAutonomousDatabase#maintenance_schedule_type}

---

##### `mtlsConnectionRequired`<sup>Optional</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.mtlsConnectionRequired"></a>

```typescript
public readonly mtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field specifies if the Autonomous Database requires mTLS connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#mtls_connection_required GoogleOracleDatabaseAutonomousDatabase#mtls_connection_required}

---

##### `nCharacterSet`<sup>Optional</sup> <a name="nCharacterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.nCharacterSet"></a>

```typescript
public readonly nCharacterSet: string;
```

- *Type:* string

The national character set for the Autonomous Database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#n_character_set GoogleOracleDatabaseAutonomousDatabase#n_character_set}

---

##### `operationsInsightsState`<sup>Optional</sup> <a name="operationsInsightsState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.operationsInsightsState"></a>

```typescript
public readonly operationsInsightsState: string;
```

- *Type:* string

Possible values:  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED ENABLING ENABLED DISABLING NOT_ENABLED FAILED_ENABLING FAILED_DISABLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#operations_insights_state GoogleOracleDatabaseAutonomousDatabase#operations_insights_state}

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

The private endpoint IP address for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#private_endpoint_ip GoogleOracleDatabaseAutonomousDatabase#private_endpoint_ip}

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

The private endpoint label for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#private_endpoint_label GoogleOracleDatabaseAutonomousDatabase#private_endpoint_label}

---

### GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesApexDetails: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails = { ... }
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings = { ... }
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings = { ... }
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles = { ... }
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls = { ... }
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.property.email">email</a></code> | <code>string</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#email GoogleOracleDatabaseAutonomousDatabase#email}

---

### GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb = { ... }
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails = { ... }
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime = { ... }
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime = { ... }
```


### GoogleOracleDatabaseAutonomousDatabaseTimeouts <a name="GoogleOracleDatabaseAutonomousDatabaseTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

const googleOracleDatabaseAutonomousDatabaseTimeouts: googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#create GoogleOracleDatabaseAutonomousDatabase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#delete GoogleOracleDatabaseAutonomousDatabase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#update GoogleOracleDatabaseAutonomousDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#create GoogleOracleDatabaseAutonomousDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#delete GoogleOracleDatabaseAutonomousDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_oracle_database_autonomous_database#update GoogleOracleDatabaseAutonomousDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion">apexVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion">ordsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails">GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apexVersion`<sup>Required</sup> <a name="apexVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion"></a>

```typescript
public readonly apexVersion: string;
```

- *Type:* string

---

##### `ordsVersion`<sup>Required</sup> <a name="ordsVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion"></a>

```typescript
public readonly ordsVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails">GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high">high</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low">low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high"></a>

```typescript
public readonly high: string;
```

- *Type:* string

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low"></a>

```typescript
public readonly low: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high">high</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low">low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a>

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated"></a>

```typescript
public readonly dedicated: string;
```

- *Type:* string

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high"></a>

```typescript
public readonly high: string;
```

- *Type:* string

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low"></a>

```typescript
public readonly low: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles"></a>

```typescript
public readonly profiles: GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat">hostFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional">isRegional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode">sessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat">syntaxFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication">tlsAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `hostFormat`<sup>Required</sup> <a name="hostFormat" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```typescript
public readonly hostFormat: string;
```

- *Type:* string

---

##### `isRegional`<sup>Required</sup> <a name="isRegional" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```typescript
public readonly isRegional: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

---

##### `syntaxFormat`<sup>Required</sup> <a name="syntaxFormat" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```typescript
public readonly syntaxFormat: string;
```

- *Type:* string

---

##### `tlsAuthentication`<sup>Required</sup> <a name="tlsAuthentication" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```typescript
public readonly tlsAuthentication: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri">apexUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri">databaseTransformsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri">graphStudioUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri">machineLearningNotebookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri">machineLearningUserManagementUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri">mongoDbUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri">ordsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri">sqlDevWebUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apexUri`<sup>Required</sup> <a name="apexUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri"></a>

```typescript
public readonly apexUri: string;
```

- *Type:* string

---

##### `databaseTransformsUri`<sup>Required</sup> <a name="databaseTransformsUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri"></a>

```typescript
public readonly databaseTransformsUri: string;
```

- *Type:* string

---

##### `graphStudioUri`<sup>Required</sup> <a name="graphStudioUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri"></a>

```typescript
public readonly graphStudioUri: string;
```

- *Type:* string

---

##### `machineLearningNotebookUri`<sup>Required</sup> <a name="machineLearningNotebookUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri"></a>

```typescript
public readonly machineLearningNotebookUri: string;
```

- *Type:* string

---

##### `machineLearningUserManagementUri`<sup>Required</sup> <a name="machineLearningUserManagementUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri"></a>

```typescript
public readonly machineLearningUserManagementUri: string;
```

- *Type:* string

---

##### `mongoDbUri`<sup>Required</sup> <a name="mongoDbUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri"></a>

```typescript
public readonly mongoDbUri: string;
```

- *Type:* string

---

##### `ordsUri`<sup>Required</sup> <a name="ordsUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri"></a>

```typescript
public readonly ordsUri: string;
```

- *Type:* string

---

##### `sqlDevWebUri`<sup>Required</sup> <a name="sqlDevWebUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri"></a>

```typescript
public readonly sqlDevWebUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime">dataGuardRoleChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime">disasterRecoveryRoleChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration">lagTimeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataGuardRoleChangedTime`<sup>Required</sup> <a name="dataGuardRoleChangedTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime"></a>

```typescript
public readonly dataGuardRoleChangedTime: string;
```

- *Type:* string

---

##### `disasterRecoveryRoleChangedTime`<sup>Required</sup> <a name="disasterRecoveryRoleChangedTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime"></a>

```typescript
public readonly disasterRecoveryRoleChangedTime: string;
```

- *Type:* string

---

##### `lagTimeDuration`<sup>Required</sup> <a name="lagTimeDuration" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration"></a>

```typescript
public readonly lagTimeDuration: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetBackupRetentionPeriodDays">resetBackupRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeGb">resetDataStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeTb">resetDataStorageSizeTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbEdition">resetDbEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsStorageAutoScalingEnabled">resetIsStorageAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMaintenanceScheduleType">resetMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMtlsConnectionRequired">resetMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetNCharacterSet">resetNCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetOperationsInsightsState">resetOperationsInsightsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointLabel">resetPrivateEndpointLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContacts` <a name="putCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts"></a>

```typescript
public putCustomerContacts(value: IResolvable | GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]

---

##### `resetBackupRetentionPeriodDays` <a name="resetBackupRetentionPeriodDays" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetBackupRetentionPeriodDays"></a>

```typescript
public resetBackupRetentionPeriodDays(): void
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCharacterSet"></a>

```typescript
public resetCharacterSet(): void
```

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCustomerContacts"></a>

```typescript
public resetCustomerContacts(): void
```

##### `resetDataStorageSizeGb` <a name="resetDataStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeGb"></a>

```typescript
public resetDataStorageSizeGb(): void
```

##### `resetDataStorageSizeTb` <a name="resetDataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeTb"></a>

```typescript
public resetDataStorageSizeTb(): void
```

##### `resetDbEdition` <a name="resetDbEdition" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbEdition"></a>

```typescript
public resetDbEdition(): void
```

##### `resetDbVersion` <a name="resetDbVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbVersion"></a>

```typescript
public resetDbVersion(): void
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsAutoScalingEnabled"></a>

```typescript
public resetIsAutoScalingEnabled(): void
```

##### `resetIsStorageAutoScalingEnabled` <a name="resetIsStorageAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsStorageAutoScalingEnabled"></a>

```typescript
public resetIsStorageAutoScalingEnabled(): void
```

##### `resetMaintenanceScheduleType` <a name="resetMaintenanceScheduleType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMaintenanceScheduleType"></a>

```typescript
public resetMaintenanceScheduleType(): void
```

##### `resetMtlsConnectionRequired` <a name="resetMtlsConnectionRequired" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMtlsConnectionRequired"></a>

```typescript
public resetMtlsConnectionRequired(): void
```

##### `resetNCharacterSet` <a name="resetNCharacterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetNCharacterSet"></a>

```typescript
public resetNCharacterSet(): void
```

##### `resetOperationsInsightsState` <a name="resetOperationsInsightsState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetOperationsInsightsState"></a>

```typescript
public resetOperationsInsightsState(): void
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointIp"></a>

```typescript
public resetPrivateEndpointIp(): void
```

##### `resetPrivateEndpointLabel` <a name="resetPrivateEndpointLabel" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointLabel"></a>

```typescript
public resetPrivateEndpointLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb">actualUsedDataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb">allocatedStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails">apexDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList">GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed">arePrimaryAllowlistedIpsUsed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls">connectionUrls</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState">databaseManagementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState">dataSafeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration">failedDataRecoveryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType">localDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb">localStandbyDb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime">maintenanceBeginTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime">maintenanceEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs">memoryPerOracleComputeUnitGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs">memoryTableGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime">nextLongTermBackupTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds">peerDbIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState">refreshableState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails">scheduledOperationDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions">supportedCloneRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs">totalAutoBackupStorageSizeGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs">usedDataStorageSizeTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDaysInput">backupRetentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSetInput">characterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContactsInput">customerContactsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGbInput">dataStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTbInput">dataStorageSizeTbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEditionInput">dbEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabledInput">isStorageAutoScalingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleTypeInput">maintenanceScheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequiredInput">mtlsConnectionRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSetInput">nCharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsStateInput">operationsInsightsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabelInput">privateEndpointLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays">backupRetentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition">dbEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled">isStorageAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType">maintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet">nCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState">operationsInsightsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualUsedDataStorageSizeTb`<sup>Required</sup> <a name="actualUsedDataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb"></a>

```typescript
public readonly actualUsedDataStorageSizeTb: number;
```

- *Type:* number

---

##### `allocatedStorageSizeTb`<sup>Required</sup> <a name="allocatedStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb"></a>

```typescript
public readonly allocatedStorageSizeTb: number;
```

- *Type:* number

---

##### `apexDetails`<sup>Required</sup> <a name="apexDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails"></a>

```typescript
public readonly apexDetails: GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList">GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a>

---

##### `arePrimaryAllowlistedIpsUsed`<sup>Required</sup> <a name="arePrimaryAllowlistedIpsUsed" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed"></a>

```typescript
public readonly arePrimaryAllowlistedIpsUsed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions"></a>

```typescript
public readonly availableUpgradeVersions: string[];
```

- *Type:* string[]

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a>

---

##### `connectionUrls`<sup>Required</sup> <a name="connectionUrls" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls"></a>

```typescript
public readonly connectionUrls: GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts"></a>

```typescript
public readonly customerContacts: GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a>

---

##### `databaseManagementState`<sup>Required</sup> <a name="databaseManagementState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState"></a>

```typescript
public readonly databaseManagementState: string;
```

- *Type:* string

---

##### `dataSafeState`<sup>Required</sup> <a name="dataSafeState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState"></a>

```typescript
public readonly dataSafeState: string;
```

- *Type:* string

---

##### `failedDataRecoveryDuration`<sup>Required</sup> <a name="failedDataRecoveryDuration" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration"></a>

```typescript
public readonly failedDataRecoveryDuration: string;
```

- *Type:* string

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled"></a>

```typescript
public readonly isLocalDataGuardEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimit: number;
```

- *Type:* number

---

##### `localDisasterRecoveryType`<sup>Required</sup> <a name="localDisasterRecoveryType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType"></a>

```typescript
public readonly localDisasterRecoveryType: string;
```

- *Type:* string

---

##### `localStandbyDb`<sup>Required</sup> <a name="localStandbyDb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb"></a>

```typescript
public readonly localStandbyDb: GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a>

---

##### `maintenanceBeginTime`<sup>Required</sup> <a name="maintenanceBeginTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime"></a>

```typescript
public readonly maintenanceBeginTime: string;
```

- *Type:* string

---

##### `maintenanceEndTime`<sup>Required</sup> <a name="maintenanceEndTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime"></a>

```typescript
public readonly maintenanceEndTime: string;
```

- *Type:* string

---

##### `memoryPerOracleComputeUnitGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitGbs" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitGbs: number;
```

- *Type:* number

---

##### `memoryTableGbs`<sup>Required</sup> <a name="memoryTableGbs" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs"></a>

```typescript
public readonly memoryTableGbs: number;
```

- *Type:* number

---

##### `nextLongTermBackupTime`<sup>Required</sup> <a name="nextLongTermBackupTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime"></a>

```typescript
public readonly nextLongTermBackupTime: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `peerDbIds`<sup>Required</sup> <a name="peerDbIds" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds"></a>

```typescript
public readonly peerDbIds: string[];
```

- *Type:* string[]

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: string;
```

- *Type:* string

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

---

##### `refreshableState`<sup>Required</sup> <a name="refreshableState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState"></a>

```typescript
public readonly refreshableState: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `scheduledOperationDetails`<sup>Required</sup> <a name="scheduledOperationDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails"></a>

```typescript
public readonly scheduledOperationDetails: GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a>

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl"></a>

```typescript
public readonly sqlWebDeveloperUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedCloneRegions`<sup>Required</sup> <a name="supportedCloneRegions" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions"></a>

```typescript
public readonly supportedCloneRegions: string[];
```

- *Type:* string[]

---

##### `totalAutoBackupStorageSizeGbs`<sup>Required</sup> <a name="totalAutoBackupStorageSizeGbs" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs"></a>

```typescript
public readonly totalAutoBackupStorageSizeGbs: number;
```

- *Type:* number

---

##### `usedDataStorageSizeTbs`<sup>Required</sup> <a name="usedDataStorageSizeTbs" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs"></a>

```typescript
public readonly usedDataStorageSizeTbs: number;
```

- *Type:* number

---

##### `backupRetentionPeriodDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodDaysInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDaysInput"></a>

```typescript
public readonly backupRetentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSetInput"></a>

```typescript
public readonly characterSetInput: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContactsInput"></a>

```typescript
public readonly customerContactsInput: IResolvable | GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]

---

##### `dataStorageSizeGbInput`<sup>Optional</sup> <a name="dataStorageSizeGbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```typescript
public readonly dataStorageSizeGbInput: number;
```

- *Type:* number

---

##### `dataStorageSizeTbInput`<sup>Optional</sup> <a name="dataStorageSizeTbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```typescript
public readonly dataStorageSizeTbInput: number;
```

- *Type:* number

---

##### `dbEditionInput`<sup>Optional</sup> <a name="dbEditionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEditionInput"></a>

```typescript
public readonly dbEditionInput: string;
```

- *Type:* string

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkloadInput"></a>

```typescript
public readonly dbWorkloadInput: string;
```

- *Type:* string

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabledInput"></a>

```typescript
public readonly isAutoScalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isStorageAutoScalingEnabledInput`<sup>Optional</sup> <a name="isStorageAutoScalingEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabledInput"></a>

```typescript
public readonly isStorageAutoScalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `maintenanceScheduleTypeInput`<sup>Optional</sup> <a name="maintenanceScheduleTypeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleTypeInput"></a>

```typescript
public readonly maintenanceScheduleTypeInput: string;
```

- *Type:* string

---

##### `mtlsConnectionRequiredInput`<sup>Optional</sup> <a name="mtlsConnectionRequiredInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequiredInput"></a>

```typescript
public readonly mtlsConnectionRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nCharacterSetInput`<sup>Optional</sup> <a name="nCharacterSetInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSetInput"></a>

```typescript
public readonly nCharacterSetInput: string;
```

- *Type:* string

---

##### `operationsInsightsStateInput`<sup>Optional</sup> <a name="operationsInsightsStateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsStateInput"></a>

```typescript
public readonly operationsInsightsStateInput: string;
```

- *Type:* string

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIpInput"></a>

```typescript
public readonly privateEndpointIpInput: string;
```

- *Type:* string

---

##### `privateEndpointLabelInput`<sup>Optional</sup> <a name="privateEndpointLabelInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabelInput"></a>

```typescript
public readonly privateEndpointLabelInput: string;
```

- *Type:* string

---

##### `backupRetentionPeriodDays`<sup>Required</sup> <a name="backupRetentionPeriodDays" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays"></a>

```typescript
public readonly backupRetentionPeriodDays: number;
```

- *Type:* number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `dataStorageSizeGb`<sup>Required</sup> <a name="dataStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb"></a>

```typescript
public readonly dataStorageSizeGb: number;
```

- *Type:* number

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

---

##### `dbEdition`<sup>Required</sup> <a name="dbEdition" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition"></a>

```typescript
public readonly dbEdition: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isStorageAutoScalingEnabled`<sup>Required</sup> <a name="isStorageAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled"></a>

```typescript
public readonly isStorageAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `maintenanceScheduleType`<sup>Required</sup> <a name="maintenanceScheduleType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType"></a>

```typescript
public readonly maintenanceScheduleType: string;
```

- *Type:* string

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired"></a>

```typescript
public readonly mtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nCharacterSet`<sup>Required</sup> <a name="nCharacterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet"></a>

```typescript
public readonly nCharacterSet: string;
```

- *Type:* string

---

##### `operationsInsightsState`<sup>Required</sup> <a name="operationsInsightsState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState"></a>

```typescript
public readonly operationsInsightsState: string;
```

- *Type:* string

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabaseProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime">stopTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a>

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime"></a>

```typescript
public readonly stopTime: GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get"></a>

```typescript
public get(index: number): GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a>

---


### GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleOracleDatabaseAutonomousDatabase } from '@cdktf/provider-google-beta'

new googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleOracleDatabaseAutonomousDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

---



