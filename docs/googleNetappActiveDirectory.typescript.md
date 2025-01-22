# `googleNetappActiveDirectory` Submodule <a name="`googleNetappActiveDirectory` Submodule" id="@cdktf/provider-google-beta.googleNetappActiveDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappActiveDirectory <a name="GoogleNetappActiveDirectory" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory google_netapp_active_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer"></a>

```typescript
import { googleNetappActiveDirectory } from '@cdktf/provider-google-beta'

new googleNetappActiveDirectory.GoogleNetappActiveDirectory(scope: Construct, id: string, config: GoogleNetappActiveDirectoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig">GoogleNetappActiveDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig">GoogleNetappActiveDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAdministrators">resetAdministrators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAesEncryption">resetAesEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetBackupOperators">resetBackupOperators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetEncryptDcConnections">resetEncryptDcConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcHostname">resetKdcHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcIp">resetKdcIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLdapSigning">resetLdapSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetNfsUsersWithLdap">resetNfsUsersWithLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSecurityOperators">resetSecurityOperators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSite">resetSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetappActiveDirectoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

---

##### `resetAdministrators` <a name="resetAdministrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAdministrators"></a>

```typescript
public resetAdministrators(): void
```

##### `resetAesEncryption` <a name="resetAesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAesEncryption"></a>

```typescript
public resetAesEncryption(): void
```

##### `resetBackupOperators` <a name="resetBackupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetBackupOperators"></a>

```typescript
public resetBackupOperators(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptDcConnections` <a name="resetEncryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetEncryptDcConnections"></a>

```typescript
public resetEncryptDcConnections(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKdcHostname` <a name="resetKdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcHostname"></a>

```typescript
public resetKdcHostname(): void
```

##### `resetKdcIp` <a name="resetKdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcIp"></a>

```typescript
public resetKdcIp(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLdapSigning` <a name="resetLdapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLdapSigning"></a>

```typescript
public resetLdapSigning(): void
```

##### `resetNfsUsersWithLdap` <a name="resetNfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetNfsUsersWithLdap"></a>

```typescript
public resetNfsUsersWithLdap(): void
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOrganizationalUnit"></a>

```typescript
public resetOrganizationalUnit(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSecurityOperators` <a name="resetSecurityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSecurityOperators"></a>

```typescript
public resetSecurityOperators(): void
```

##### `resetSite` <a name="resetSite" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSite"></a>

```typescript
public resetSite(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappActiveDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct"></a>

```typescript
import { googleNetappActiveDirectory } from '@cdktf/provider-google-beta'

googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement"></a>

```typescript
import { googleNetappActiveDirectory } from '@cdktf/provider-google-beta'

googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource"></a>

```typescript
import { googleNetappActiveDirectory } from '@cdktf/provider-google-beta'

googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport"></a>

```typescript
import { googleNetappActiveDirectory } from '@cdktf/provider-google-beta'

googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetappActiveDirectory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappActiveDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappActiveDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappActiveDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference">GoogleNetappActiveDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administratorsInput">administratorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryptionInput">aesEncryptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperatorsInput">backupOperatorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dnsInput">dnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnectionsInput">encryptDcConnectionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostnameInput">kdcHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIpInput">kdcIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigningInput">ldapSigningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefixInput">netBiosPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdapInput">nfsUsersWithLdapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperatorsInput">securityOperatorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.siteInput">siteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administrators">administrators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryption">aesEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperators">backupOperators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dns">dns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnections">encryptDcConnections</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostname">kdcHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIp">kdcIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigning">ldapSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefix">netBiosPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdap">nfsUsersWithLdap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperators">securityOperators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.site">site</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappActiveDirectoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference">GoogleNetappActiveDirectoryTimeoutsOutputReference</a>

---

##### `administratorsInput`<sup>Optional</sup> <a name="administratorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administratorsInput"></a>

```typescript
public readonly administratorsInput: string[];
```

- *Type:* string[]

---

##### `aesEncryptionInput`<sup>Optional</sup> <a name="aesEncryptionInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryptionInput"></a>

```typescript
public readonly aesEncryptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupOperatorsInput`<sup>Optional</sup> <a name="backupOperatorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperatorsInput"></a>

```typescript
public readonly backupOperatorsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dnsInput"></a>

```typescript
public readonly dnsInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `encryptDcConnectionsInput`<sup>Optional</sup> <a name="encryptDcConnectionsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnectionsInput"></a>

```typescript
public readonly encryptDcConnectionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kdcHostnameInput`<sup>Optional</sup> <a name="kdcHostnameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostnameInput"></a>

```typescript
public readonly kdcHostnameInput: string;
```

- *Type:* string

---

##### `kdcIpInput`<sup>Optional</sup> <a name="kdcIpInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIpInput"></a>

```typescript
public readonly kdcIpInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ldapSigningInput`<sup>Optional</sup> <a name="ldapSigningInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigningInput"></a>

```typescript
public readonly ldapSigningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `netBiosPrefixInput`<sup>Optional</sup> <a name="netBiosPrefixInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefixInput"></a>

```typescript
public readonly netBiosPrefixInput: string;
```

- *Type:* string

---

##### `nfsUsersWithLdapInput`<sup>Optional</sup> <a name="nfsUsersWithLdapInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdapInput"></a>

```typescript
public readonly nfsUsersWithLdapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnitInput"></a>

```typescript
public readonly organizationalUnitInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `securityOperatorsInput`<sup>Optional</sup> <a name="securityOperatorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperatorsInput"></a>

```typescript
public readonly securityOperatorsInput: string[];
```

- *Type:* string[]

---

##### `siteInput`<sup>Optional</sup> <a name="siteInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.siteInput"></a>

```typescript
public readonly siteInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetappActiveDirectoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `administrators`<sup>Required</sup> <a name="administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administrators"></a>

```typescript
public readonly administrators: string[];
```

- *Type:* string[]

---

##### `aesEncryption`<sup>Required</sup> <a name="aesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryption"></a>

```typescript
public readonly aesEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backupOperators`<sup>Required</sup> <a name="backupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperators"></a>

```typescript
public readonly backupOperators: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dns"></a>

```typescript
public readonly dns: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `encryptDcConnections`<sup>Required</sup> <a name="encryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnections"></a>

```typescript
public readonly encryptDcConnections: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kdcHostname`<sup>Required</sup> <a name="kdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostname"></a>

```typescript
public readonly kdcHostname: string;
```

- *Type:* string

---

##### `kdcIp`<sup>Required</sup> <a name="kdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIp"></a>

```typescript
public readonly kdcIp: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ldapSigning`<sup>Required</sup> <a name="ldapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigning"></a>

```typescript
public readonly ldapSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `netBiosPrefix`<sup>Required</sup> <a name="netBiosPrefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefix"></a>

```typescript
public readonly netBiosPrefix: string;
```

- *Type:* string

---

##### `nfsUsersWithLdap`<sup>Required</sup> <a name="nfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdap"></a>

```typescript
public readonly nfsUsersWithLdap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `securityOperators`<sup>Required</sup> <a name="securityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperators"></a>

```typescript
public readonly securityOperators: string[];
```

- *Type:* string[]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappActiveDirectoryConfig <a name="GoogleNetappActiveDirectoryConfig" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.Initializer"></a>

```typescript
import { googleNetappActiveDirectory } from '@cdktf/provider-google-beta'

const googleNetappActiveDirectoryConfig: googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dns">dns</a></code> | <code>string</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.domain">domain</a></code> | <code>string</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.location">location</a></code> | <code>string</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.name">name</a></code> | <code>string</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.netBiosPrefix">netBiosPrefix</a></code> | <code>string</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.password">password</a></code> | <code>string</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.username">username</a></code> | <code>string</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.administrators">administrators</a></code> | <code>string[]</code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.aesEncryption">aesEncryption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.backupOperators">backupOperators</a></code> | <code>string[]</code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.encryptDcConnections">encryptDcConnections</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcHostname">kdcHostname</a></code> | <code>string</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcIp">kdcIp</a></code> | <code>string</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.ldapSigning">ldapSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.nfsUsersWithLdap">nfsUsersWithLdap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.securityOperators">securityOperators</a></code> | <code>string[]</code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.site">site</a></code> | <code>string</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dns"></a>

```typescript
public readonly dns: string;
```

- *Type:* string

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#dns GoogleNetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#domain GoogleNetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#location GoogleNetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#name GoogleNetappActiveDirectory#name}

---

##### `netBiosPrefix`<sup>Required</sup> <a name="netBiosPrefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.netBiosPrefix"></a>

```typescript
public readonly netBiosPrefix: string;
```

- *Type:* string

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#net_bios_prefix GoogleNetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#password GoogleNetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#username GoogleNetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.administrators"></a>

```typescript
public readonly administrators: string[];
```

- *Type:* string[]

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#administrators GoogleNetappActiveDirectory#administrators}

---

##### `aesEncryption`<sup>Optional</sup> <a name="aesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.aesEncryption"></a>

```typescript
public readonly aesEncryption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#aes_encryption GoogleNetappActiveDirectory#aes_encryption}

---

##### `backupOperators`<sup>Optional</sup> <a name="backupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.backupOperators"></a>

```typescript
public readonly backupOperators: string[];
```

- *Type:* string[]

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#backup_operators GoogleNetappActiveDirectory#backup_operators}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#description GoogleNetappActiveDirectory#description}

---

##### `encryptDcConnections`<sup>Optional</sup> <a name="encryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.encryptDcConnections"></a>

```typescript
public readonly encryptDcConnections: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#encrypt_dc_connections GoogleNetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdcHostname`<sup>Optional</sup> <a name="kdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcHostname"></a>

```typescript
public readonly kdcHostname: string;
```

- *Type:* string

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#kdc_hostname GoogleNetappActiveDirectory#kdc_hostname}

---

##### `kdcIp`<sup>Optional</sup> <a name="kdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcIp"></a>

```typescript
public readonly kdcIp: string;
```

- *Type:* string

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#kdc_ip GoogleNetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#labels GoogleNetappActiveDirectory#labels}

---

##### `ldapSigning`<sup>Optional</sup> <a name="ldapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.ldapSigning"></a>

```typescript
public readonly ldapSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#ldap_signing GoogleNetappActiveDirectory#ldap_signing}

---

##### `nfsUsersWithLdap`<sup>Optional</sup> <a name="nfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.nfsUsersWithLdap"></a>

```typescript
public readonly nfsUsersWithLdap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#nfs_users_with_ldap GoogleNetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#organizational_unit GoogleNetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}.

---

##### `securityOperators`<sup>Optional</sup> <a name="securityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.securityOperators"></a>

```typescript
public readonly securityOperators: string[];
```

- *Type:* string[]

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#security_operators GoogleNetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#site GoogleNetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappActiveDirectoryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#timeouts GoogleNetappActiveDirectory#timeouts}

---

### GoogleNetappActiveDirectoryTimeouts <a name="GoogleNetappActiveDirectoryTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.Initializer"></a>

```typescript
import { googleNetappActiveDirectory } from '@cdktf/provider-google-beta'

const googleNetappActiveDirectoryTimeouts: googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappActiveDirectoryTimeoutsOutputReference <a name="GoogleNetappActiveDirectoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetappActiveDirectory } from '@cdktf/provider-google-beta'

new googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetappActiveDirectoryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

---



